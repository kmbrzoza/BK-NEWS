import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'detail/:id', component: ArticleDetailComponent},
  { path: 'search/:str', component: ArticleSearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
