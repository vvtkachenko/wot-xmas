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

  public startToys: number = 0;

  public totalToys: number = 0;

  public currentToy: number = 0;

  public goalToys: number = 0;

  public cost: number = 0;

  constructor () {
  }

  public getSingleToyCost () {
    this.currentToy = this.startToys;
    return Math.floor(this.baseCost / (1 - (this.currentToy/this.totalToys)));
  }

  public getCost() {
    if (this.goalToys) {
      this.cost = 0;
      for (let index = this.currentToy; index <= this.goalToys; index++) {
        this.currentToy = index;
        this.cost += this.getSingleToyCost();
      }
    } else {
      this.cost = this.getSingleToyCost();
    }
    
  }
  
}
