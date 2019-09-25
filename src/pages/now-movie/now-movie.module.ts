import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NowMoviePage } from './now-movie';

@NgModule({
  declarations: [
    NowMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(NowMoviePage),
  ],
})
export class NowMoviePageModule {}
