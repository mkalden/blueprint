import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { UserService } from '../../user/user.service';
import { User } from '../../shared/interfaces/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit, OnDestroy {
  public articleForm: FormGroup;
  public user: User;

  private subscription: Subscription;

  constructor(private articleService: ArticlesService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {

    this.subscription = this.userService.user$
      .subscribe((user: any) => {
        this.user = {
          uid: user.uid,
          name: user.displayName
        };
      });

    this.articleForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'body': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'imageUrl': new FormControl('', [
        Validators.required,
        Validators.pattern(this.articleService.urlScheme)
      ])
    });
  }

  public onCancel(): void {
    this.router.navigate(['articles']);
  }

  public onCreate(): void {
    const article = {
      title: this.articleForm.value.title,
      body: this.articleForm.value.body,
      imageUrl: this.articleForm.value.imageUrl,
      authorName: this.user.name,
      authorId: this.user.uid
    };
    this.articleService.createArticle(article);
    this.router.navigate(['articles']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
