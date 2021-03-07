import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  constructor(private service: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticlesByStr();
  }
  searchedArticles: Article[];
  getArticlesByStr(){
    const str = this.route.snapshot.paramMap.get('str');
    this.service.getArticleByStr(str).subscribe(art => this.searchedArticles = art);
  }
}
