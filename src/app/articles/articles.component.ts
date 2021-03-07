import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  newArticles: Article[];
  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe((articles: Array<Article>) => {
      this.newArticles = articles;
    });
  }
    
  ngOnInit(): void {
  }

}
