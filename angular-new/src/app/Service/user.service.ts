import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient } from './httpClient';
import { Global } from '../Shared/global';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends HttpClient {

  constructor(private _http: Http, private _router: Router) {
    super(_http, _router);
    this.serviceURL = Global.BASE_USER_ENDPOINT;
  }
  getByName(name: string) {
      this.params.set('name', name);
      return this.get(this.serviceURL + 'getByName');
  }
}
