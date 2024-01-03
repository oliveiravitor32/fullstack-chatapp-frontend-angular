import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css'],
})
export class PersonalCardComponent implements OnInit {
  nickname: string = 'a';

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('nickname');
    if (storedData !== null) {
      const sessionData = storedData;
      this.nickname = sessionData;
    }
  }
}
