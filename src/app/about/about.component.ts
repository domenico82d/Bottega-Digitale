import { Component } from '@angular/core';
import { VisionComponent } from '../vision/vision.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [VisionComponent],  // ✅ Import qui
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { }
