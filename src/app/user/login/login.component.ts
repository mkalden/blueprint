import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public providers = AuthProvider;

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  public onSuccess(content: any): void {
    console.log('content', content);
    const name = content.displayName || 'Guest';
    this.snackBar.open(`Welcome ${name}!`, 'Ok', {
      duration: 3000
    });
    this.router.navigate(['postings']);
  }

}
