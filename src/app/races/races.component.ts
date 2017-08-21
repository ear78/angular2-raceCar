import { Component, OnInit } from '@angular/core';
import { Race } from './race';
// import { RaceService } from './race.service';

@Component({
  selector: 'my-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
    heading = 'Ultra Racing Schedule';
    cash = 10000;
    races: Race[];
    
  constructor() { }

  ngOnInit() {
  }

}
