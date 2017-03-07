import { Injectable } from '@angular/core';


@Injectable()
export class Configuration {
  private _baseApiUrl: string;

  get baseApiUrl() {
    return this._baseApiUrl;
  }

  setBaseApiUrl(baseUrl: string): Configuration {
    this._baseApiUrl = baseUrl;
    return this;
  }
}
