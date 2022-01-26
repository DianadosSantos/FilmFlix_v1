import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieTvBase } from 'src/app/core/models/movie-tv-base';
import { TmdbApiService } from 'src/app/core/services/tmdb-api/tmdb-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tmdbApi: TmdbApiService) { }
  detail$!: Observable<MovieTvBase>;

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.detail$ = this.tmdbApi.getDetailById(id, 'movie');
  }

}
