import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';  // Holds the current input for the calculator
  buttons: string[] = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  // Method to handle button clicks
  onButtonClick(button: string): void {
    if (button === 'C') {
      this.clear();  // Clear the display
    } else if (button === '=') {
      this.calculateResult();  // Calculate the result
    } else {
      this.appendInput(button);  // Append the button value to the display
    }
  }

  // Append the clicked button to the current display
  appendInput(value: string): void {
    this.display += value;
  }

  // Clear the current display
  clear(): void {
    this.display = '';
  }

  // Evaluate the current input as a mathematical expression
  calculateResult(): void {
    try {
      this.display = eval(this.display).toString();
    } catch (e) {
      this.display = 'Error';  // Show error if the expression is invalid
    }
  }
}
