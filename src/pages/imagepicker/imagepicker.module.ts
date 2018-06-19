import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagepickerPage } from './imagepicker';

@NgModule({
  declarations: [
    ImagepickerPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagepickerPage),
  ],
})
export class ImagepickerPageModule {}
