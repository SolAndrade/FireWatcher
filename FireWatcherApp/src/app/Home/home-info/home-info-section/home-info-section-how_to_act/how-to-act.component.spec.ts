import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToActComponent } from './how-to-act.component';

describe('HowToActComponent', () => {
  let component: HowToActComponent;
  let fixture: ComponentFixture<HowToActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToActComponent]
    });
    fixture = TestBed.createComponent(HowToActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
