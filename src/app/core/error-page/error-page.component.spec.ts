import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageComponent } from './error-page.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a headline', () => {
    const elm = fixture.debugElement.nativeElement;
    expect(elm.querySelector('h2')).not.toBeNull();
  });

  it('should have a link to home page', () => {
    const de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = de.findIndex(i => i.properties['href'] === '/');
    expect(index).toBeGreaterThan(-1);
  });
});
