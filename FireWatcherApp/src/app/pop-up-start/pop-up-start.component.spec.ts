import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpStartComponent } from './pop-up-start.component';

describe('PopUpStartComponent', () => {
  let component: PopUpStartComponent;
  let fixture: ComponentFixture<PopUpStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpStartComponent]
    });
    fixture = TestBed.createComponent(PopUpStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
