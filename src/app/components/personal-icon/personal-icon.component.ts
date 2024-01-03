import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-icon',
  templateUrl: './personal-icon.component.html',
  styleUrls: ['./personal-icon.component.css'],
})
export class PersonalIconComponent {
  @Input() nickname: String = 'A';
}
