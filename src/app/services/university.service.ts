import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { University } from '../interfaces/university';
import { PageSettings } from '../interfaces/pageSettings';
import { Filter } from '../interfaces/filter';
import { Page } from '../interfaces/page';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(
    private http: HttpClient,
    private helper: HelperService) { }

  private url = `${environment.apiUrl}/University`;

  getUniversity(id: string): Observable<University> {
    return this.http.get<University>(`${this.url}/${id}`);
  }

  getUniversityPage(settings: PageSettings, filter: Filter): Observable<Page<University>> {
    let params = this.helper.getParams(filter, settings);

    return this.http.get<Page<University>>(`${this.url}`, { params });
  }

  getUniversityAbbreviations(filter: Filter): Observable<string[]> {
    let params = this.helper.getParams(filter);

    return this.http.get<string[]>(`${this.url}/Abbreviations`, { params });
  }
}
