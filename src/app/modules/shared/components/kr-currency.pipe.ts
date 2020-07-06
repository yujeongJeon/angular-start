import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "krCurrency"
})
export class KrCurrencyPipe implements PipeTransform {
  transform(num:number, args?:any){
    const numToCharArray = num.toString().split('');

    if (numToCharArray.length > 3) { 
      numToCharArray.splice(-3, 0, ',');
    }
    return `${numToCharArray.join('')}원`
  }
}