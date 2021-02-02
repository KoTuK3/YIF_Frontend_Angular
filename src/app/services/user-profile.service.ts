import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  //private token = 'token';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczZjU1YWYyLWFhZjQtNDU5ZC04MWQzLTAwMDFmMDgwZWJlMCIsImVtYWlsIjoia29seWFseXV0a29AZ21haWwuY29tIiwicm9sZXMiOiJHcmFkdWF0ZSIsImV4cCI6MTYxMjMxMDA1OH0.0sjUipfEdE34Qri7lKVbp5fu0rbRW02SWHm7m9OuHuc';
  constructor(
    private http: HttpClient) {
    localStorage.setItem('YIF_token', this.token);
  }

  private url = `${environment.apiUrl}/Test/getByEmail`;


  getProfile(): Observable<UserProfile> {
    const urlGet = `${environment.apiUrl}/Users/Current`;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${localStorage.getItem('YIF_token')}`);
    return this.http.get<UserProfile>(`${urlGet}`, { headers });
  }

  postProfile(profile: UserProfile | undefined): Observable<UserProfile> {
    const urlSet = `${environment.apiUrl}/Users/SetProfile`;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${localStorage.getItem('YIF_token')}`);
    console.log(profile);
    return this.http.post<UserProfile>(`${urlSet}`, profile, { headers });
  }
  //return this.http.post<UserProfile>(`${urlSet}`, JSON.stringify(profile), { headers });
}
