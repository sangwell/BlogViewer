import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:3000/';
  private blogUrl = this.baseUrl + 'blog/getBlogList';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getBlogList(searchModel): Observable<any> {
    return this.http.post(this.blogUrl, searchModel);
  }


}
