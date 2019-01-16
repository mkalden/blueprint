import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { PostingsRoutingModule } from './postings-routing.module';
import { PostingsListComponent } from './postings-list/postings-list.component';

@NgModule({
  declarations: [PostingsListComponent],
  imports: [
    CommonModule,
    PostingsRoutingModule,
    MaterialModule
  ]
})
export class PostingsModule {
}
