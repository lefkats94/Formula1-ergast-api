import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsInfoComponent } from './circuits-info.component';

describe('CircuitsInfoComponent', () => {
  let component: CircuitsInfoComponent;
  let fixture: ComponentFixture<CircuitsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
