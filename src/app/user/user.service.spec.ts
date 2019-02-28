import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
      AngularFireAuthModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      NoopAnimationsModule,
      MaterialModule
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
