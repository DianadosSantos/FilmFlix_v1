import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  baseUrl= 'http://api.themoviedb.org/3/';

  options= {
    api_key:'6b3f042cc3f44fa7693b831c47720f9e',
    language:'pt-BR'
  }

  constructor() { }
}
