import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
  userName: string = '';
  selectedFont: string = 'Arial';
  fontSize: string = '16px';
  leftAlign: boolean = false;
  centerAlign: boolean = false;
  rightAlign: boolean = false;

  getAlignment(): string {
    if (this.leftAlign) {
      return 'left';
    } else if (this.centerAlign) {
      return 'center';
    } else if (this.rightAlign) {
      return 'right';
    } else {
      return 'left'; 
    }
  }
}
