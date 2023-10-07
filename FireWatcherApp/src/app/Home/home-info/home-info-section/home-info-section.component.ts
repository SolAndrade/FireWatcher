import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-info-section',
  templateUrl: './home-info-section.component.html',
  styleUrls: ['./home-info-section.component.css']
})
export class HomeInfoSectionComponent {
  @Input({required: true  }) title!: string;
  @Input({required: true  }) url!: string;
  
}
