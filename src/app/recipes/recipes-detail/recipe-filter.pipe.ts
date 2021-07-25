import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'recipeFilter',
  pure: false
})
export class RecipeFilterPipe implements PipeTransform {

  transform(value: any, string: string): any {
    if (string.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.name.toLowerCase().includes(string)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
