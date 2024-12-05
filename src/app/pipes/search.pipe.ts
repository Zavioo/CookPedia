import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes:any[],searchKey:string): any[] { // perdefined function
    let result:any =[]
    if(!allRecipes || searchKey=="" ){
      return allRecipes;
    }
    result = allRecipes.filter((items:any)=>items.name) // need to complete
    return result;
  }

}

// output will what the transform function returns