import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReclamationComponent } from './card-reclamation.component';

describe('CardReclamationComponent', () => {
  let component: CardReclamationComponent;
  let fixture: ComponentFixture<CardReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardReclamationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
