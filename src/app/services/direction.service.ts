import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Filter } from '../interfaces/filter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(
    private http: HttpClient,
    private helper: HelperService) { }

  private url = `${environment.apiUrl}/Direction`;

  getDirectionNames(filter: Filter): Observable<string[]> {
    let params = this.helper.getParams(filter);

    return this.http.get<string[]>(`${this.url}/Names`, { params });
  }
}
