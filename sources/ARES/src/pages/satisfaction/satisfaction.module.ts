import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SatisfactionPage } from './satisfaction';

@NgModule({
  declarations: [
    SatisfactionPage,
  ],
  imports: [
    IonicPageModule.forChild(SatisfactionPage),
  ],
})
export class SatisfactionPageModule {}
