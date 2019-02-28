import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListComponent } from './articles-list.component';
import { MaterialModule } from '../../shared/material.module';
import { TruncateTextPipe } from '../../shared/pipes/truncate-text.pipe';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;

  const articles = [
    {
      article: {
        title: 'My Article',
        body: 'article text',
        imageUrl: '',
        authorName: 'Foo'
      },
      id: 'hghfgfggf'
    }
  ];

  const data = Observable.create(articles);

  const collectionStub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  };

  const AngularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlesListComponent,
        TruncateTextPipe
      ],
      imports: [
        MaterialModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: AngularFirestore, useValue: AngularFirestoreStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
