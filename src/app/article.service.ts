import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesListObs = new BehaviorSubject<Array<Article>>([]);
  private artilclesByStr = new BehaviorSubject<Array<Article>>([]);
  constructor(private http: HttpService) { 
    this.http.getArticles().subscribe(list =>{
      this.articlesListObs.next(list);
    });
  }
  getArticles(){
    return this.articlesListObs.asObservable();
  }
  getArticle(id: string){
    return this.http.getArticle(id);
  }
  getArticleByStr(str: string){
    const regex = new RegExp(str, 'gi');
    let artByStr = new BehaviorSubject<Array<Article>>([]);
    this.http.getArticles().subscribe(list =>{
      artByStr.next(list.filter(a => regex.test(a.title) || regex.test(a.summary)))
    })
    return artByStr;
  }
}
