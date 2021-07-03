import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://ce-authenticated-backend.herokuapp.com/publicapi/movies';
  constructor(private httpClient: HttpClient) { }

  get(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.API_URL).toPromise();
  }

  post(movie: any): Promise<any> {
    return this.httpClient.post<any>(this.API_URL, movie).toPromise();
  }
}
