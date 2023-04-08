import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsCardsComponent } from './teams-cards.component';

describe('TeamsCardsComponent', () => {
  let component: TeamsCardsComponent;
  let fixture: ComponentFixture<TeamsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
