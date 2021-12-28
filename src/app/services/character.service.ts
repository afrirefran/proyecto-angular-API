import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { Observable } from 'rxjs';*/

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}
  retornar() {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=2eca9728912d721a5d087c020c5ecd82&language=es-US&page=1");
  }
}



  /*getCharacters(): Observable {
    return this.httpClient.get('');
  }
}*/
