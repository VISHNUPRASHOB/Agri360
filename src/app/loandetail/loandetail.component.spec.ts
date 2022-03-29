import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetailComponent } from './loandetail.component';

describe('LoandetailComponent', () => {
  let component: LoandetailComponent;
  let fixture: ComponentFixture<LoandetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
