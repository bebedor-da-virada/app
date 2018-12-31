import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../provider/ranking.service';
import { Ranking } from '../../model/ranking';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  providers: [RankingService]
})
export class RankingComponent implements OnInit {

  ranking: Ranking[];
  constructor(
    private rankingService: RankingService
  ) { }

  ngOnInit() {

    this.ranking = new Array<Ranking>();

    this.rankingService.getRanking()
    .subscribe(res=> {
      this.ranking = res;
    })


  }

}
