import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoSectionComponent } from './home-info-section.component';

describe('HomeInfoSectionComponent', () => {
  let component: HomeInfoSectionComponent;
  let fixture: ComponentFixture<HomeInfoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInfoSectionComponent]
    });
    fixture = TestBed.createComponent(HomeInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
