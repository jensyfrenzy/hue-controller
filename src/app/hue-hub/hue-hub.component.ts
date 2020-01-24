import {Component, OnInit} from '@angular/core';
import {HueHubService} from './hue-hub.service';

@Component({
  selector: 'app-hue-hub',
  templateUrl: './hue-hub.component.html',
  styleUrls: ['./hue-hub.component.scss']
})
export class HueHubComponent implements OnInit {
  lights: any[];

  constructor(private service: HueHubService) {
  }

  ngOnInit() {
    this.service.getLights().then(response =>
      this.initiateLights(response)
    );
  }

  private initiateLights(response: any) {
    if (response._body == null) {
      return;
    }

    this.lights = [];
    const lightsJson = JSON.parse(response._body);

    // due to how lights are stored in the hue hub, it is somewhat necessary to use arbitrary number
    for (let i = 0; i < 20; i++) {
      if (lightsJson[i] == null) {
        continue;
      }

      this.lights.push(lightsJson[i]);
      this.lights[this.lights.length - 1].id = i;
    }
  }
}
