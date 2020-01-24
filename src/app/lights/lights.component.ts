import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HueHubService} from '../hue-hub/hue-hub.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {
  @Input() light: any;

  constructor(private service: HueHubService) {}

  ngOnInit(): void {
  }

  toggleOnState(light: any) {
    if (!light.state) {
      return;
    }

    light.state.on = !light.state.on;
    this.service.turnOn(light);
  }

  setBrightness(event: any, light: any) {
    light.state.bri = event.value;
    this.service.setState(light);
  }

  setColor(event: any) {
    console.log(event.value);
  }

}
