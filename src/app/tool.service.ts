import { Injectable } from '@angular/core';
import {ParamType} from './Bean';

import { Headers, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ToolService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'http://localhost:8080/tool/param_types';  // URL to web api

  constructor(private jsonp:Jsonp) { }
  getParamTypes(): Promise<string[]> {

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(this.heroesUrl, {search: params})
      .toPromise()
      .then(response => response.json() as string[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

export const PARAM_TYPES: ParamType[] = [
  {typeId:1, name:"int"},
  {typeId:2, name:"String"}
]
