import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../user/auth.service';
import { User } from '../../shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public user: Observable<User>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private router: Router
  ) {
  }

  public toSignup(): void {
    this.router.navigate(['user/login']);
  }

  public toProfile(): void {
    this.router.navigate(['user/profile']);
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
