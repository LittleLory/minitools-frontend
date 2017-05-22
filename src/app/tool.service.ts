import { Injectable } from '@angular/core';
import {Tool, ParamType, Dependency, Parameter} from './Bean';

import { Headers, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ToolService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'http://localhost:8080/tool';  // URL to web api

  constructor(private jsonp: Jsonp) { }
  getParamTypes(): Promise<string[]> {

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    const url = this.heroesUrl + "/param_types";
    return this.jsonp.get(url, { search: params })
      .toPromise()
      .then(response => response.json().data as string[])
      .catch(this.handleError);
  }

  createTool(saveResult): Promise<string[]> {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('entryName', saveResult.entryName);

    // for(var i in saveResult.dependencies) {
    //   params.set('dependencies['+i+']', JSON.stringify(saveResult.dependencies[i]));
    // }
    params.set('dependencies', JSON.stringify(saveResult.dependencies));

    // for(var i in saveResult.parameters) {
      // params.set('parameters['+i+']', JSON.stringify(saveResult.parameters[i]));
    // }
    params.set('parameters', JSON.stringify(saveResult.parameters));
    params.set('code', saveResult.code);
    params.set('isPublic', JSON.stringify(saveResult.isPublic));
    const url = this.heroesUrl + "/create";
    return this.jsonp.get(url, {search : params})
      .toPromise()
      .then(response => response.json().data as string[])
      .catch(this.handleError);
  }

  getToolIds(): Promise<number[]> {
    // const url = this.heroesUrl + "/ids";
    // return this.toJsonp<number[]>(url, new Map<String, String>());

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    const url = this.heroesUrl + "/ids";
    return this.jsonp.get(url, {search: params})
    .toPromise()
    .then(response => response.json().data as number[])
    .catch(this.handleError);
  }

  getTool(toolId:number): Promise<Tool> {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    const url = this.heroesUrl + "/" + toolId;
    return this.jsonp.get(url, {search: params})
    .toPromise()
    .then(response => response.json().data as Tool)
    .catch(this.handleError);
  }

  invoke(toolId:number, values:string[]): Promise<string> {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('toolId', JSON.stringify(toolId));
    params.set('values', JSON.stringify(values));

    const url = this.heroesUrl + "/invoke";
    return this.jsonp.get(url, {search: params})
    .toPromise()
    .then(response => response.json().data as string)
    .catch(this.handleError);
  }

  template(parameters: Parameter[]): Promise<string> {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('parameters', JSON.stringify(parameters));

    const url = this.heroesUrl + "/template";
    return this.jsonp.get(url, {search : params})
    .toPromise()
    .then(response => response.json().data as string)
    .catch(this.handleError);
  }

  private toJsonp<T>(url: string, params: Map<String, String>) {
    let searchParams = new URLSearchParams();
    searchParams.set('callback', 'JSONP_CALLBACK');
    for(var key in params) {
      searchParams.set(key, params[key]);
    }

    return this.jsonp.get(url, {search : params})
    .toPromise()
    .then(response => response.json().data as T)
    .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

export const PARAM_TYPES: ParamType[] = [
  { typeId: 1, name: "int" },
  { typeId: 2, name: "String" }
]
