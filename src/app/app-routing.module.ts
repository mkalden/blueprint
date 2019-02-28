import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ErrorPageComponent } from './core/error-page/error-page.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'error-page', component: ErrorPageComponent},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'articles', loadChildren: './articles/articles.module#ArticlesModule', canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'error-page', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
