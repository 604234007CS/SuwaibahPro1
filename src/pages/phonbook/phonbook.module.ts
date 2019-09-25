import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonbookPage } from './phonbook';

@NgModule({
  declarations: [
    PhonbookPage,
  ],
  imports: [
    IonicPageModule.forChild(PhonbookPage),
  ],
})
export class PhonbookPageModule {}
