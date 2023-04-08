import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsInfoComponent } from './standings-info.component';

describe('TableComponent', () => {
  let component: StandingsInfoComponent;
  let fixture: ComponentFixture<StandingsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
