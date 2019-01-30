import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { TruncateTextPipe } from '../shared/pipes/truncate-text.pipe';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    TruncateTextPipe,
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule {
}
