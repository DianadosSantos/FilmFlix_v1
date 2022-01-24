import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SspPipe } from './pipes/ssp/ssp.pipe';



@NgModule({
  declarations: [
    SspPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SspPipe
  ]
})
export class SharedModule { }
