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

  // constructor() {
  //   this.arrNoticias = [
  //     {titulo: 'Titulo noticia1', noticia: 'noticia 1', imagen:'imagen1', fecha:'fecha1'},
  //     {titulo: 'Titulo noticia2', noticia: 'noticia 2', imagen:'imagen2', fecha:'fecha2'}
  //   ]
  // }

  cargarNoticia(): void {
    this.articulo = '';
    this.arrNoticias.forEach((noticiavar) => {
      this.articulo += `
      <div class="noticiaCaja">
        <h3>
        ${noticiavar.titulo}
        </h3>
          <p class"cuerpo">
          ${noticiavar.noticia}
          </p>
            <img src="${noticiavar.imagen}" />
              <p class="fechaF">${noticiavar.fecha}</p>
      </div>`;
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
      alert('Todos los campos deben estar rellenos');
    }
  }
}
