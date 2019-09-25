import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonebookDeteilPage } from './phonebook-deteil';

@NgModule({
  declarations: [
    PhonebookDeteilPage,
  ],
  imports: [
    IonicPageModule.forChild(PhonebookDeteilPage),
  ],
})
export class PhonebookDeteilPageModule {}
