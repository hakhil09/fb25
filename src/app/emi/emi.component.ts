import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  principal: number = 0;
  interestRate: number = 0;
  tenureYears: number = 0;
  emi: number = 0;
  totalPayment: number = 0;
  totalInterest: number = 0;
  showResult: boolean = false;

  
  calculateEMI() {
    if (this.validateInputs()) {
      const monthlyRate = (this.interestRate / 12) / 100; 
      const months = this.tenureYears * 12; 

    
      const numerator = this.principal * monthlyRate * Math.pow(1 + monthlyRate, months);
      const denominator = Math.pow(1 + monthlyRate, months) - 1;
      this.emi = numerator / denominator;


      this.totalPayment = this.emi * months;
      this.totalInterest = this.totalPayment - this.principal;

      this.showResult = true;
    }
  }

  
  validateInputs(): boolean {
    if (isNaN(this.principal) || isNaN(this.interestRate) || isNaN(this.tenureYears)) {
      alert('All inputs must be numeric.');
      return false;
    }
    if (this.principal <= 0 || this.interestRate < 0 || this.tenureYears <= 0) {
      alert('All inputs must be positive numbers.');
      return false;
    }
    return true;
  }

  
  reset() {
    this.principal = 0;
    this.interestRate = 0;
    this.tenureYears = 0;
    this.emi = 0;
    this.totalPayment = 0;
    this.totalInterest = 0;
    this.showResult = false;
  }
}