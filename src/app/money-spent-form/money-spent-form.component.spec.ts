import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySpentFormComponent } from './money-spent-form.component';

describe('MoneySpentFormComponent', () => {
  let component: MoneySpentFormComponent;
  let fixture: ComponentFixture<MoneySpentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneySpentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneySpentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
