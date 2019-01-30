import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../../shared/interfaces/article';
import { User } from '../../shared/interfaces/user';
import { Subscription } from 'rxjs';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  public item: Article;
  public status: string;
  private articleId: string;
  private user: User;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService,
    private userService: UserService
  ) {
    this.subscription = this.userService.user$
      .subscribe((user: any) => {
        this.user = {
          uid: user.uid,
          name: user.displayName
        };
      });
  }

  ngOnInit() {
    this.articleId = this.route.snapshot.params.id;
    this.status = 'read';
    this.articlesService.getArticleById(this.articleId)
      .subscribe(
        (data: any) => {
          if (data) {
            data.editButton = this.canEdit(this.user.uid, data.article.authorId);
            this.item = data;
          }
        }
      );
  }

  public onEdit(): string {
    return this.status = 'edit';
  }

  public onUpdated(event) {
    this.status = event;
  }

  public goBack(): void {
    this.router.navigate(['articles']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private canEdit(userId: string, articleId: string): boolean {
    return userId === articleId;
  }

}
