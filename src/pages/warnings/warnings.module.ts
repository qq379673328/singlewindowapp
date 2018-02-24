import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarningsPage } from './warnings';

@NgModule({
  declarations: [
    WarningsPage,
  ],
  imports: [
    IonicPageModule.forChild(WarningsPage),
  ],
})
export class WarningsPageModule {}
