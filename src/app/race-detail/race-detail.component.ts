import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RaceService } from '../races/race.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {
    private raceId;
  constructor(private route: ActivatedRoute,
              private raceService: RaceService) { }

  ngOnInit() {
      this.route.params.subscribe(
        //   (params: Params) => this.raceId = params['id']
        (params: Params) => this.raceService.getRace(params['id'])
      )

    //   this.raceService.getRace(this.route.params){
    //
    //   }
  }

}
