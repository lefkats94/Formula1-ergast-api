import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardsInARowComponent } from './four-cards-in-a-row.component';

describe('ThreeCardsInARowComponent', () => {
  let component: ThreeCardsInARowComponent;
  let fixture: ComponentFixture<ThreeCardsInARowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeCardsInARowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeCardsInARowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
