import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: ['./received-message.component.css'],
})
export class ReceivedMessageComponent implements OnInit {
  @Input() author: string = '';
  color: string = '#f2f2f2';

  colors: string[] = [
    '#8B3D3D',
    '#D13434',
    '#E0CF35',
    '#978606',
    '#1F7C02',
    '#02885B',
    '#002D61',
    '#095FC2',
    '#537FB3',
    '#40058D',
    '#680FDB',
    '#8A5CB9',
  ];

  ngOnInit(): void {
    this.getColor();
  }

  getColor() {
    let aux: number = 0;

    for (let i = 0; i < 3; i++) {
      aux += parseInt(this.author.charCodeAt(i).toString()[0]);
    }

    aux = aux % 12;

    this.color = this.colors[aux];
  }
}
