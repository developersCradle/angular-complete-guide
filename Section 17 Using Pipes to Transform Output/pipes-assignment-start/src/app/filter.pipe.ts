import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {

  // filteredString, return elements array of aarray matches this filter status
  transform(value: any, filteredString: string, propName: string): unknown {
  //any holds value where pipe is wanted to be applied
    if (value.lenght === 0 || filteredString === '') {
      return value;
    } // nothing to filter

    let resultArray = [];

    for (const item of value) {
      if (item[propName] === filteredString) {
        resultArray.push(item);
      }
    }

    return resultArray;

  }
}