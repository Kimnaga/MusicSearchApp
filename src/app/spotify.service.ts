import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { spotify } from '../environments/environment';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {}
    query(URL: string, params?: Array<string> ) {
      let queryURL = `${SpotifyService.BASE_URL}${URL}`;
      if (params) {queryURL = `${queryURL}?${params.join('&')}`;}
      const apiKey = spotify.ApiKey;
      const headers = new HttpHeaders({Authorization: `Bearer ${apiKey}`}); 
      //const options = new RequestOptions({headers: headers});
      return this.http.get(queryURL, {headers: headers}); }
    
      search(query: string, type: string) {
        return this.query(`/search`, [ `q=${query}`, `type=${type}`]);}
}
