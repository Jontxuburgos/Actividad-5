import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  title: string = '';
  newBody: string = '';
  url: string = '';
  date: string = '';
  articulo: string = '';
  arrNoticias: Noticia[] = [];

  cargarNoticia(): void {
    this.articulo = '';
    this.arrNoticias.forEach((noticiavar) => {
      this.articulo += `<li> ${noticiavar.titulo} ${noticiavar.noticia} <img src="${noticiavar.imagen}"> ${noticiavar.fecha} </li>`;
    });
  }

  publicar(): void {
    if (
      this.title !== '' &&
      this.newBody !== '' &&
      this.url !== '' &&
      this.date !== ''
    ) {
      let noticiavar: Noticia = {
        titulo: this.title,
        noticia: this.newBody,
        imagen: this.url,
        fecha: this.date,
      };

      this.arrNoticias.push(noticiavar);
      this.cargarNoticia();
      this.newBody = '';
      this.title = '';
      this.url = '';
      this.date = '';
    } else {
      alert('HOLAA');
    }
  }
}
