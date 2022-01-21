export interface MovieTvBase {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  poster_path: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
  title: string;
  name: string;
  overview: string;
  release_date: Date;
  id: number;
  popularity: number;
  media_type: string;
}
