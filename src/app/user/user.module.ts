import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../shared/material.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    NgxAuthFirebaseUIModule
  ]
})
export class UserModule {
}
