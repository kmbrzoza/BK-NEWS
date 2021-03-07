import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  readonly url = 'https://www.spaceflightnewsapi.net/api/v2/articles';

  getArticles(): Observable<Array<Article>>{
    return this.http.get<Array<Article>>(this.url);
  }

  getArticle(id: string): Observable<Article>{
    //const param = new HttpParams().set('id', id+'');
    return this.http.get<Article>(this.url+'/'+id)
  }

}
