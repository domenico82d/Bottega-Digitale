import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  imports: [],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }


}
