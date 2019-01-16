import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FirebaseModule } from './firebase.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FirebaseModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule {
}
