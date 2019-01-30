import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../shared/interfaces/article';
import { ArticlesService } from '../articles.service';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  public articles: Article[];

  private user: User;
  private subscription: Subscription;

  constructor(
    private articleService: ArticlesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
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
    this.articleService.getAllArticles()
      .subscribe(
        articles => {
          this.articles = articles;
        }
      );
  }

  public isAuthenticated(): boolean {
    if (this.user) {
      return this.user.name !== null;
    }
    return false;
  }

  public onRead(id: string): void {
    this.router.navigate([id], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
