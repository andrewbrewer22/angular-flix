import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  API_URL = 'https://api.themoviedb.org/3/search/multi';
  API_KEY = '7d9b772c6ed1e55533c1c3d5f3453fce';

  constructor(private httpClient: HttpClient) { }

  get(searchTerm: string): Promise<any> {
    const params: HttpParams  = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('query', searchTerm);

    return this.httpClient.get<any>(this.API_URL, {params}).toPromise();
  }
}
