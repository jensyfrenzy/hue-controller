import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MdButtonModule, MdCardModule, MdSliderModule, MdSlideToggleModule} from '@angular/material';
import {HueHubComponent} from './hue-hub/hue-hub.component';
import {HueHubService} from './hue-hub/hue-hub.service';
import {HttpModule} from '@angular/http';
import {LightsComponent} from './lights/lights.component';
import {ColorPickerModule} from 'angular4-color-picker/lib/color-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    HueHubComponent,
    LightsComponent
  ],
  imports: [
    BrowserModule,
    MdSlideToggleModule,
    HttpModule,
    MdSliderModule,
    MdCardModule,
    ColorPickerModule,
    MdButtonModule,
  ],
  providers: [HueHubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
