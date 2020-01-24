import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as url from 'url';

@Injectable()
export class HueHubService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private ipAddress = '192.168.86.21'; // ip address of hue hub
  private token = 'PnJizpG2gaNnZj4GMpbEtMo9iIrQEQJCmF7tIOJP'; // token provided by hue hub
  private hueBridgeApi = 'http://' + this.ipAddress + '/api/' + this.token;  // URL to web api

  constructor(private http: Http) {
  }

  getLights(): Promise<any> {
    const url = `${this.hueBridgeApi}/lights`;
    return this.http
      .get(url)
      .toPromise();
  }

  setState(light: any): Promise<any> {
    const url = `${this.hueBridgeApi}/lights/${light.id}/state/`;
    return this.http
      .put(url, JSON.stringify(light.state), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  setBrightness(light: any): Promise<any> {
    const url = `${this.hueBridgeApi}/lights/${light.id}/state/`;
    return this.http
      .put(url, JSON.stringify({'bri': light.state.bri}), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  turnOn(light: any): Promise<any> {
    const url = `${this.hueBridgeApi}/lights/${light.id}/state/`;
    return this.http
      .put(url, JSON.stringify({'on': light.state.on}), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
