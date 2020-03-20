import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getTweet(id) {
    const params = new HttpParams().set('id', id);
    const options = {
      params
    };
    return this.http.get('http://localhost:3000/', options);
    // return throwError(new Error("can't connect to server"))
  }
}