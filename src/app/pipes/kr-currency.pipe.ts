import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "krCurrency"
})
export class KrCurrencyPipe implements PipeTransform {
  transform(num:number, args?:any){
    return `${num}원`
  }
}