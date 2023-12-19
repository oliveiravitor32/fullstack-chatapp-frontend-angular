import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: [
    './side-bar.component.css',
    './side-bar.responsive.component.css',
  ],
})
export class SideBarComponent {
  @Input() enableAnimation: boolean = false;
}
