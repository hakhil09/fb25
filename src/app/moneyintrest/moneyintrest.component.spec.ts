import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyintrestComponent } from './moneyintrest.component';

describe('MoneyintrestComponent', () => {
  let component: MoneyintrestComponent;
  let fixture: ComponentFixture<MoneyintrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyintrestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyintrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
