import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMapComponent } from './home-map.component';

describe('HomeMapComponent', () => {
  let component: HomeMapComponent;
  let fixture: ComponentFixture<HomeMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMapComponent]
    });
    fixture = TestBed.createComponent(HomeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
