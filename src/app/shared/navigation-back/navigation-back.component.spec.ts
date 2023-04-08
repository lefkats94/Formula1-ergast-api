import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBackComponent } from './navigation-back.component';

describe('NavigationBackComponent', () => {
  let component: NavigationBackComponent;
  let fixture: ComponentFixture<NavigationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
