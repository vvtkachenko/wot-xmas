import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  public title = 'WOT Christmas presents cost';

  public baseCost: number = 0;

  public availableToys: number = 0;

  public  totalToys: number = 0;

  public cost: number = 0;

  constructor () {
  }

  public getCost() {
    console.log(this.baseCost, this.availableToys, this.totalToys);
    
    this.cost = Math.floor(this.baseCost / (1 - (this.availableToys/this.totalToys)) - 100);
  }

  
}
