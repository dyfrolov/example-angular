import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModeService} from '../mode.service';

 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModeService
  ],
  providers:[ModeService]
})
export class UncleModule { }
