import { Component } from '@angular/core';

@Component({
  selector: 'app-moneyintrest',
  templateUrl: './moneyintrest.component.html',
  styleUrls: ['./moneyintrest.component.css']
})
export class MoneyintrestComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  simpleInterest: number = 0;

  calculateSimpleInterest() {
    this.simpleInterest = (this.principal * this.time * this.rate) / 100;
  }

  clear() {
    this.principal = 0;
    this.rate = 0;
    this.time = 0;
    this.simpleInterest = 0;
  }
}
