import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountSpentComponent } from './total-amount-spent.component';

describe('TotalAmountSpentComponent', () => {
  let component: TotalAmountSpentComponent;
  let fixture: ComponentFixture<TotalAmountSpentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalAmountSpentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAmountSpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
