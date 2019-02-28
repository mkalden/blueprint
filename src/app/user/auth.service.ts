import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {
    this.user$ = this.afAuth.authState;
    console.log('this.user$', this.user$);
  }

  // public logout(): void {
  //   this.afAuth.auth.signOut().then(() => {
  //     this.snackBar.open(`You've Signed Out`, 'OK', {
  //       duration: 2000
  //     });
  //   });
  // }
}
