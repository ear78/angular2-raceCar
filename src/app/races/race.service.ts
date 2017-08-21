import { Injectable } from '@angular/core';
import { RACES } from './mocks';
import { Http } from '@angular/http';
import { Race } from './race';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  getRaces(){
      return this.http.get('assets/races.json')
            .map(response => <Race[]>response.json().racesData);
  }
}
