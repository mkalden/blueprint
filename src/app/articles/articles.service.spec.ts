import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      NoopAnimationsModule
    ]
  }));

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});
