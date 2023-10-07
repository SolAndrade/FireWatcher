import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoComponent } from './home-info.component';

describe('HomeInfoComponent', () => {
  let component: HomeInfoComponent;
  let fixture: ComponentFixture<HomeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInfoComponent]
    });
    fixture = TestBed.createComponent(HomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
