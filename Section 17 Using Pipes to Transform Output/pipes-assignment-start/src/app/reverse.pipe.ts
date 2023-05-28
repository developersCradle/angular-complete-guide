import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string) {

    let reverseString = "";
    

    for (let char of value) {
      reverseString = char + reverseString;  
    }

    return reverseString;
  }

}
