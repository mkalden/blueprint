import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public user: Observable<User>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.router.navigate(['/articles']);
    }
  }


  public toSignup(): void {
    this.router.navigate(['user/login']);
  }

  public toProfile(): void {
    this.router.navigate(['user/profile']);
  }

  public onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }

}
