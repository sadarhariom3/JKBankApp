import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm?:any): any {
    if (!value) return null;
    if(!searchTerm || '') return value;
    searchTerm=searchTerm.toLowerCase();
    return value.filter(function(search:any){
     // return search.Name.indexOf(searchTerm) > -1
      return JSON.stringify(search).toLowerCase().includes(searchTerm)
    });
  }

}
