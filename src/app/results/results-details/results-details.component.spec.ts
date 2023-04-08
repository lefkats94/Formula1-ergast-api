import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDetailsComponent } from './results-details.component';

describe('ResultsDetailsComponent', () => {
  let component: ResultsDetailsComponent;
  let fixture: ComponentFixture<ResultsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
