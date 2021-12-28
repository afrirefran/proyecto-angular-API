import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  characters:any = null;
  constructor(private characterService:CharacterService) { }
  ngOnInit(){
    this.characterService.retornar()
      .subscribe( result =>  this.characters = result)
  }
}

  /*arrayTest: any[] = [
    {
      name: 'Spiderman',
      top: false,
      description: '',
      img: 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/11/spider-man-sin-camino-a-casa.jpg?fit=1200%2C796&ssl=1'
    },
    {
      name: 'El señor de los anillos',
      top: false,
      description: '',
      img: 'https://as01.epimg.net/meristation/imagenes/2021/07/07/noticias/1625672419_027507_1625737804_noticia_normal.jpg'
    },
    {
      name: 'Harry Potter',
      top: true,
      description: '',
      img: null,
    },
    {
      name: 'Jurasic Park',
      top: true,
      description: '',
      img: 'https://static.posters.cz/image/750/posters/jurassic-park-classic-logo-i57759.jpg'
    },
];


  constructor() { }

  ngOnInit(): void {
    console.log(this.arrayTest)
  }
}*/
