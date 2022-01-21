import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
