import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/login'])

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'perfil',
    component:ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path:'movie/:id',
    component: MovieDetailComponent,
  },
  {
    path:'tv/:id',
    component: TvDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


//6b3f042cc3f44fa7693b831c47720f9e key api de filmes
