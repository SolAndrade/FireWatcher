import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent {
  popup = false;
  img = '../assets/img/risks.jpeg';
  info: any;
  savedImg = '';

  ngOnInit() {
    this.generatePopUp();
  }

  constructor(private homeService: HomeService) {}

  generatePopUp(): void {
    this.popup = this.homeService.getPopupState();
  }

  getMapImg(): void {
    this.img = this.homeService.getMapImg();
  }

  showRiskView(): void{
    this.img = '../assets/img/risks.jpeg'
    this.info = null;
  }

  showFireActivityView(): void{
    this.img = '../assets/img/activity.jpeg'
    this.info = null;
  }

  showInactiveFiresView(): void{
    this.img = '../assets/img/inactive.jpeg'
    this.info = null;
  }
  
  showImageView(): void{
    this.img = this.savedImg;
    this.info = null;
  }

  showInfoView(): void{
    this.info = 1;
    this.savedImg = this.img;
    this.img = '';
  }

}
