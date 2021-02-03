import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { School } from "../interfaces/school";




@Injectable({ providedIn: 'root' })
export class SchoolService {
  public Schools: School[] = [];

  constructor(private http: HttpClient) {}

  private url = `${environment.apiUrl}/School`;

  getAllSchools(): Observable<School[]> {
      return this.http.get<School[]>(`${this.url}`);
  }
}
