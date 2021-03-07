import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostUserService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  postUser = (user: User): Observable<Data> => {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<User[]>(`${this.baseUrl}/users`, user, {headers, observe: 'response'})
      .pipe(retry(1), catchError(this.processError));
  };

  processError = (err: ErrorEvent): Observable<Error> => {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Message: ${err.message}`;
    }
    return throwError(message);
  };
}
