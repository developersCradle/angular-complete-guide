import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName : string): unknown {
      return value.sort((a,b) => {
        if (a[propName] > b[propName]) {
          return 1; //this shoud come first
        } else {
          return -1;
        }
      });
  }

}
