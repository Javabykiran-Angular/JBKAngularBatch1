import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length===0){
      return value;
    }
    let emparr:any[]=[];

    for (let i = 0; i < value.length; i++) {
      let name:string=value[i].name;
      let dept:string=value[i].departmentit;
      let status:string=value[i].status;
      if(name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        emparr.push(value[i]);
      }else if(value[i].departmentit.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        emparr.push(value[i]);
      }else if(value[i].country.cname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        emparr.push(value[i]);
      }else if(status.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        emparr.push(value[i]);
      }
      
    }
    return emparr;

    // return value.filter((search)=>{
    //   return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
    // })
  }

}
