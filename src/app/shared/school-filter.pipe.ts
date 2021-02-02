import { Pipe, PipeTransform } from "@angular/core";
import { toEditorSettings } from "typescript";
import { School } from "../interfaces/school";

@Pipe({
  name: 'schoolFilter',
})
export class SchoolFilter implements PipeTransform {
  transform(schools: School[], search: string = ''): School[] {
   if(!search.trim()){
    return schools;
   }

   return schools.filter( school => {
     return school.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
   });
  }
}
