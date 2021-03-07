import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ArticleService
    ) { }

  article: Article;

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getArticle(id).subscribe(art => this.article = art)
  }
}
