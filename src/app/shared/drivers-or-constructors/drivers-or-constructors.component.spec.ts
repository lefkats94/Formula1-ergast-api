import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversOrConstructorsComponent } from './drivers-or-constructors.component';

describe('DriversOrConstructorsComponent', () => {
  let component: DriversOrConstructorsComponent;
  let fixture: ComponentFixture<DriversOrConstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversOrConstructorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversOrConstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
