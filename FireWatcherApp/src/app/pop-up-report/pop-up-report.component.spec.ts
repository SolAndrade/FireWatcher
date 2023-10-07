import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpReportComponent } from './pop-up-report.component';

describe('PopUpReportComponent', () => {
  let component: PopUpReportComponent;
  let fixture: ComponentFixture<PopUpReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpReportComponent]
    });
    fixture = TestBed.createComponent(PopUpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
