import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service'; // Update the path
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';


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
  probabilityOfFire: any;
  lastFireDate: any;
  distanceFromZone: any;

  constructor(
    private apiService: ApiService,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    // Call the getData function when the component is initialized
    //this.getData('world', '2023-10-07');
    this.getFireProbability();
    this.getLastFireDate();
  }

  getData(area: string, date: string): void {
    this.apiService.getData(area, date).subscribe(
      (stats: any) => {
        this.data = stats;
      },
      error => {
        console.error('Error fetching location statistics:', error);
      }
    );
  }

  getFireProbability(): void {
    /*this.homeService.getFireProbability().subscribe(
      (prob: any) => {
        this.probabilityOfFire = prob;
      }
    )*/
    this.probabilityOfFire = 50
  }

  getLastFireDate(): void {
    /*this.homeService.getLastFireDate().subscribe(
      (date: any) => {
        this.lastFireDate = date;
      }
    )*/
    this.lastFireDate = 10;
  }
  
  getDistanceFromZone(): void {
    /*this.homeService.getDistanceFromZone().subscribe(
      (distance: any) => {
        this.distanceFromZone = distance;
      }
    )*/
    this.distanceFromZone = 20;
  }

  onClickQuit(): void {
    this.homeService.setPopupState(false);
    this.router.navigate(['/Home/home-map']);
  }
}
