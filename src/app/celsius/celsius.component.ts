import { Component } from '@angular/core';

@Component({
  selector: 'app-celsius', // Update this to match your selector
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css']
})
export class CelsiusComponent {
  // Declare the properties
  celsius: number = 0;    // Temperature in Celsius
  fahrenheit: number = 0; // Converted temperature in Fahrenheit

  // Method to convert Celsius to Fahrenheit
  convertToFahrenheit() {
    this.fahrenheit = (this.celsius * 1.8) + 32;
  }

  // Optional: Method to clear inputs
  clear() {
    this.celsius = 0;
    this.fahrenheit = 0;
  }
}