import { Injectable } from "@angular/core";


export interface School{
  id:number,
  name:string,
  description:string
}

@Injectable({providedIn: 'root'})
export class SchoolService{
  public Schools: School[] =  [
    {id:1, name: "School 1",description:"description"},
    {id:2, name: "School 2",description:"description"},
    {id:3, name: "School 3",description:"description"},
  ]
}
