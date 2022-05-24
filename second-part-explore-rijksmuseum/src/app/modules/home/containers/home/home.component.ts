import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  imgIndex = 0;
  romanNumbers = ['I', 'II', 'III', 'IV'];
  isAlertVisible = true;

  constructor() {}

  public selectedImage(index: number): void {
    this.imgIndex = index;
  }

  public toggleAlert(): void {
    this.isAlertVisible = !this.isAlertVisible;
  }
}
