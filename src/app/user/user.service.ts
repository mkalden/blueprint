import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user$: Observable<User | null>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.afAuth.authState;
  }

  public logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open(`You've Signed Out`, 'OK', {
        duration: 2000
      });
    });
    this.router.navigate(['/']);
  }
}
