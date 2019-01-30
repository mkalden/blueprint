import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  @Input() item: any;
  @Input() articleId: string;
  @Input() user: User;
  @Output() updated = new EventEmitter<string>();
  public articleForm: FormGroup;

  constructor(private router: Router, private articlesService: ArticlesService) {
  }

  ngOnInit() {
    console.log('user', this.user);
    this.articleForm = new FormGroup({
      'title': new FormControl(this.item.article.title, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'body': new FormControl(this.item.article.body, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'imageUrl': new FormControl(this.item.article.imageUrl, [
        Validators.required,
        Validators.pattern(this.articlesService.urlScheme)
      ])
    });
  }

  public onCancel(): void {
    this.updated.emit('read');
  }

  public onDelelete(): void {
    this.articlesService.deleteArticle(this.articleId);
    this.router.navigate(['articles']);
  }

  public onUpdate(): void {
    const article = {
      title: this.articleForm.value.title,
      body: this.articleForm.value.body,
      imageUrl: this.articleForm.value.imageUrl,
      authorName: this.user.name,
      authorId: this.user.uid
    };

    this.articlesService.updateArticle(this.articleId, article);
    this.updated.emit('read');
  }


}
