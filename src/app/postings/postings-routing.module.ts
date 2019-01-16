import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostingsListComponent } from './postings-list/postings-list.component';

const routes: Routes = [
  {path: '', component: PostingsListComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostingsRoutingModule {
}
