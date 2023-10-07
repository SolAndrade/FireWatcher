import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Update the path


@Component({
  selector: 'app-pop-up-start',
  templateUrl: './pop-up-start.component.html',
  styleUrls: ['./pop-up-start.component.css']
})
export class PopUpStartComponent {
  data: any;
  componentDisplayed = false;
  area: any;
  date: any;

  constructor(private apiService: ApiService) { }

  private getFireProbability(): void {
    this.apiService
  }

  ngOnInit() {
    // Call the getData function when the component is initialized
    //this.getData('world', '2023-10-07');
  }

  getData(area: string, date: string): void {
    this.apiService.getData(area, date).subscribe(
      (stats: any) => {
        this.data = stats;
      },
      error => {
        console.error('Error fetching location statistics:', error);
      },
      () => {
        this.componentDisplayed = true;  // Set the flag to true after the component is displayed
      }
    );
  }

  displayComponent() {
    this.componentDisplayed = false;  // Reset the flag to allow displaying the component again
  }
}
