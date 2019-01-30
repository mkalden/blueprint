import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {path: '', component: ArticlesListComponent, pathMatch: 'full'},
  {path: 'create', component: ArticleCreateComponent},
  {path: ':id', component: ArticleDetailComponent},
  {path: ':id/edit', component: ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
