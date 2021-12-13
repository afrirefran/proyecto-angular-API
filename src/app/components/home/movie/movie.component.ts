import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  arrayTest: any[] = [
    {
      name: 'Spiderman',
      top: false,
      description: 'El joven Petter Parker se convierte en un puto arácnido',
      img: 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/11/spider-man-sin-camino-a-casa.jpg?fit=1200%2C796&ssl=1'
    },
    {
      name: 'El señor de los anillos',
      top: false,
      description: 'Un puto Hobbit se encuentra un anillo malvado',
      img: 'https://as01.epimg.net/meristation/imagenes/2021/07/07/noticias/1625672419_027507_1625737804_noticia_normal.jpg'
    },
    {
      name: 'Harry Cipoter',
      top: true,
      description: 'Es un niño malcriado que se cae de una escalera y se hace una cicatriz brechosa en la frente y le provoca un tumor cerebral y se cree que es mago',
      img: null,
    },
    {
      name: 'Churrasic Park',
      top: true,
      description: 'un Churro de parque que acaba mal',
      img: 'https://static.posters.cz/image/750/posters/jurassic-park-classic-logo-i57759.jpg'
    },
];


  constructor() { }

  ngOnInit(): void {
    console.log(this.arrayTest)
  }

}
