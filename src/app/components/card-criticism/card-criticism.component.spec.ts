import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCriticismComponent } from './card-criticism.component';

describe('CardCriticismComponent', () => {
  let component: CardCriticismComponent;
  let fixture: ComponentFixture<CardCriticismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCriticismComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCriticismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
