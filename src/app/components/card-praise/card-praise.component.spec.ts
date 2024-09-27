import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPraiseComponent } from './card-praise.component';

describe('CardPraiseComponent', () => {
  let component: CardPraiseComponent;
  let fixture: ComponentFixture<CardPraiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPraiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
