import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailComponent } from './article-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../../../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleDetailComponent,
        ArticleEditComponent
      ],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        NgxAuthFirebaseUIModule.forRoot(environment.firebase),
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
