import { Component, Input, OnInit } from '@angular/core';
import { MovieTvBase } from 'src/app/core/models/movie-tv-base';

@Component({
  selector: 'app-result-tile',
  templateUrl: './result-tile.component.html',
  styleUrls: ['./result-tile.component.scss']
})
export class ResultTileComponent implements OnInit {

  @Input() result!: MovieTvBase

  constructor() { }

  ngOnInit(): void {
  }

}
