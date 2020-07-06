import { Injectable } from "@angular/core";

interface Data<T=any> {
  data: T;
  expiredAt?: number;
}
const MINUTE = 60;
const SECOND = 60;
const MILLISECOND = 1000;

const hoursToMilliseconds = hours => hours * MINUTE * SECOND * MILLISECOND;

@Injectable()
export class LocalStorageService {
  storage = window.localStorage;

  set(key:string, data:any, timeoutHours?:number):boolean{
    try {
      const _data:Data = {data};

      if (typeof timeoutHours === "number") {
        _data.expiredAt = new Date().getTime() + hoursToMilliseconds(timeoutHours);
      }

      this.storage.setItem(key, JSON.stringify(_data));

      return true;
    } catch(e) {
      return false;
    }
  }

  append(key:string, value:any, timeoutHours?:number):boolean{
    try {
      const prevValue:NotSpecified | null = this.get(key);
      const nextValue = !!prevValue
      ? [
        ...prevValue,
        value
      ]
      : [value]

      const setItemResult = this.set(key, nextValue, timeoutHours);

      return setItemResult;
    } catch(e) {
      return false;
    }
  }

  get<T=any>(key:string):null | T {
    try {
      const value = this.storage.getItem(key);
      if (!value) {
        return null;
      }

      const obj: Data<T> = JSON.parse(value);

      if (typeof obj.expiredAt === "number" && obj.expiredAt < new Date().getTime()) {
        this.remove(key);
        return null;
      }

      return obj.data;
    } catch(e) {
      return null;
    }
  }

  remove(key) {
    this.storage.removeItem(key);
  }
}