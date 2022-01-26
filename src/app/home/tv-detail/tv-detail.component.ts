import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieTvBase } from 'src/app/core/models/movie-tv-base';
import { TmdbApiService } from 'src/app/core/services/tmdb-api/tmdb-api.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tmdbApi: TmdbApiService) { }

  detail$!: Observable<MovieTvBase>

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.detail$ = this.tmdbApi.getDetailById(id, 'tv');
  }

}
