import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComplaintComponent } from './card-complaint.component';

describe('CardComplaintComponent', () => {
  let component: CardComplaintComponent;
  let fixture: ComponentFixture<CardComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComplaintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
