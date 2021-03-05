import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostUserService {
  // REST API
  endpoint = 'https://demo-api.now.sh';

  constructor(private http: HttpClient) {}
  private httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  postUser(user: User): any {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Content-Type': 'application/json',
    });

    return this.http
      .post<User[]>(this.endpoint + '/users', user, {
        headers,
        observe: 'response',
      })
      .pipe(retry(1), catchError(this.processError));
  }
  processError(err: any): Observable<any> {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
