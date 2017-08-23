import { Injectable } from '@angular/core';
import { RACES } from './mocks';
import { Http } from '@angular/http';
import { Race } from './race';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  raceUrl: string = 'assets/races.json';

  constructor(private http: Http) { }

  getRaces(){
      return this.http.get(this.raceUrl)
            .map(response => <Race[]>response.json().racesData);
  }

  getRace(id:number){
      const url = `${this.raceUrl}/${id}`;
    return this.http.get(this.raceUrl)
        .map(response => console.log(response.json().racesData)) 
  }
}
