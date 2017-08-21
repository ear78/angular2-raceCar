import { Component, OnInit, Input } from '@angular/core';
import { RaceService } from '../races/race.service';

@Component({
  selector: 'race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
    @Input() race;
  constructor(private raceService: RaceService) { }

  ngOnInit() {
  }

  castDate(date){
      return new Date(date);
  }

}
