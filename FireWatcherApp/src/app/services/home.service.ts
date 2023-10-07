import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private popup: boolean = true;
  test: any;
  img: any;

  constructor() { }

  getFireProbability() {
    return this.test;
  }

  getLastFireDate() {
    return this.test;
  }

  getDistanceFromZone() {
    return this.test;
  }


  getPopupState(): boolean {
    return this.popup;
  }

  setPopupState(value: boolean): void {
    this.popup = value;
  }

  getMapImg(): string {
    return this.img;
  }

  setMapImg(value: string): void {
    this.img = value;
  }
}
