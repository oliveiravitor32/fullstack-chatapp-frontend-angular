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
    this.generateColor();
  }

  generateColor() {
    let aux: number = 0;

    for (let i = 0; i < this.author.length; i++) {
      aux += parseInt(this.author.charCodeAt(i).toString()[0]);
    }

    aux = Math.round(aux / this.author.length);
    console.log(aux);

    while (aux > 11) {
      aux - Math.round(aux / 2);
    }

    this.color = this.colors[aux];
  }
}
