import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () =>import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path:'',
    loadChildren: () =>import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
