import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  characters:any = null;
  popular: boolean = false;

  constructor(private characterService:CharacterService) { }

  ngOnInit(){
    this.characterService.retornar()
      .subscribe( result =>  this.characters = result)
  }

  showPopularity(){
    this.popular = true;
  }
}

