import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:3000/';

  private getBlogListUrl = this.baseUrl + 'blog/getBlogList';
  private getBlogContentUrl = this.baseUrl + 'blog/getBlogContent';
  private getBlogListByTagUrl = this.baseUrl + 'blog/getBlogListByTag';

  constructor(
    private http: HttpClient) { }

  getBlogList(searchModel): Observable<any> {
    return this.http.post(this.getBlogListUrl, searchModel);
  }
  getBlogContent(searchModel): Observable<any> {
    return this.http.post(this.getBlogContentUrl, searchModel);
  }
  getBlogListByTag(searchModel): Observable<any> {
    return this.http.post(this.getBlogListByTagUrl, searchModel);
  }


}
