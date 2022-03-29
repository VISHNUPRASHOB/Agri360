import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroinvestComponent } from './agroinvest.component';

describe('AgroinvestComponent', () => {
  let component: AgroinvestComponent;
  let fixture: ComponentFixture<AgroinvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgroinvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
