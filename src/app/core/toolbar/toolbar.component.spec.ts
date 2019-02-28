import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './toolbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { MaterialModule } from '../../shared/material.module';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        MaterialModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it('should have a link to home page', () => {
    const de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = de.findIndex(i => i.properties['href'] === '/');
    expect(index).toBeGreaterThan(-1);
  });

  it('toSignUp() should redirect to signup page', () => {
    const spy = spyOn(router, 'navigate');
    component.toSignup();
    expect(spy).toHaveBeenCalledWith(['user/login']);
  });

  it('toProfile() should redirect to profile page', () => {
    const spy = spyOn(router, 'navigate');
    component.toProfile();
    expect(spy).toHaveBeenCalledWith(['user/profile']);
  });

  it('onLogout() should redirect to to home', () => {
    const spy = spyOn(router, 'navigate');
    component.onLogout();
    expect(spy).toHaveBeenCalledWith(['/']);
  });
});
