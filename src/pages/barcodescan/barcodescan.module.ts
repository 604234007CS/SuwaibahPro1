import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodescanPage } from './barcodescan';

@NgModule({
  declarations: [
    BarcodescanPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodescanPage),
  ],
})
export class BarcodescanPageModule {}
