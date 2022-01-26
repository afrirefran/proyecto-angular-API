import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailMovie:any = [];
  idMovie: any = this.route.snapshot.paramMap.get("id")

  constructor( public _detailsMovie: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._detailsMovie.getMovie(this.idMovie).subscribe((resp => {
      this.detailMovie = resp;
    }))
  }
}

