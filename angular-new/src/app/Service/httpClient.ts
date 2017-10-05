import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClient {

  params: URLSearchParams;
  public headers: Headers;
  serviceURL: string;

  constructor(private http: Http, private router: Router) {

    this.params = new URLSearchParams();

  }

  get(url = this.serviceURL) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
      'Access-Control-Allow-Origin': '*'
    });
    const options = new RequestOptions({ headers: this.headers, search: this.params.has ? this.params : null });

    //return this.http.get(url, options)
    return this.http.get(url)
      .map((response: any) => {
        /*if ( response.headers.get('Authorization') != null && response.headers.get('Authorization').length > 0 && response.headers.get('Authorization').split(' ').length > 0 ) {
          window.localStorage.setItem('accessToken', response.headers.get('Authorization').split(' ')[ 1 ]);
        }*/
        return JSON.parse(response[ '_body' ]);
      },error => this.catchError(error));
  }

  post(data: any, url = this.serviceURL) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.post(url, JSON.stringify(data), {
        headers: this.headers
      })
      .map((response: Response) => {
        return JSON.parse(response[ '_body' ]);
      })
      .catch((error: any) => this.catchError(error));
  }

  put(data: any, url = this.serviceURL) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.put(url, JSON.stringify(data), {
        headers: this.headers
      })
      .map((response: Response) => {
        return JSON.parse(response[ '_body' ]);
      })
      .catch((error: any) => this.catchError(error));
  }

  delete(id: number, url = this.serviceURL) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
      'Access-Control-Allow-Origin': '*'
    });
    const options = new RequestOptions({ headers: this.headers });

    return this.http.delete(url + id, options)
      .map((response: Response) => {
        return JSON.parse(response[ '_body' ]);
      })
      .catch((error: any) => this.catchError(error));
  }

  catchError(error: any) {
    if ( error.status === 401 ) {
      //this.toastr.error('É necessário login para aceder à página pedida.');
      window.localStorage.clear();
      this.router.navigate([ 'login' ]);
      error.status = 999;
    } else if ( error.status === 403 ) {
      //this.toastr.error('Não tem permissões para esta página.');
      this.router.navigate([ 'app/dashboard' ]);
      error.status = 999;
    } else if ( error.status === 400 && error._body == 'NIC em uso' ) {
      //this.toastr.error('Já existe um utilizador com este NIC.');
      error.status = 999;
    } else if ( error.status === 400 && error._body == 'Nome em uso' ) {
      //this.toastr.error('Este nome já está em uso.');
      error.status = 999;
    }

    return Observable.throw(error);
  }

}
