import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  operation: string = '+';

  calculate() {
    switch(this.operation) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 0;
    }
  }
}