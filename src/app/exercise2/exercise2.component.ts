import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component {
  firstNumber: number = 0;
  secondNumber: number = 0;
  selectedOperation: string = "";
  result: number = 0;
  history: Array<{ time: Date, operation: string, result: number }> = [];

  calculate() {
    let operationResult: number;

    switch (this.selectedOperation) {
      case 'add':
        operationResult = this.firstNumber + this.secondNumber;
        break;
      case 'subtract':
        operationResult = this.firstNumber - this.secondNumber;
        break;
      case 'multiply':
        operationResult = this.firstNumber * this.secondNumber;
        break;
      case 'divide':
        operationResult = this.firstNumber / this.secondNumber;
        break;
      default:
        operationResult = 0;
    }

    this.result = operationResult;
    this.addToHistory(operationResult);
  }

  addToHistory(result: number) {
    this.history.push({
      time: new Date(),
      operation: this.selectedOperation,
      result: result
    });
  }

  removeEntry(index: number) {
    this.history.splice(index, 1);
  }
}
