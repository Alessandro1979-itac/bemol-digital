import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserDTOModel } from '../../DTOs/UserDTO.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  ApiUrl: string = 'http://localhost/api/bemoldigitallaravelchallenge';
  HttpOptions = {};

  constructor(private http: HttpClient, private p_Router: Router) {}

  private genericPost(url: string, request: any): Observable<any> {
    this.setHeader();

    return this.http.post<any>(this.ApiUrl + url, request, this.HttpOptions);
  }

  private genericGet(_url: string): Observable<any> {
    this.setHeader();
    return this.http.get<any>(`${this.ApiUrl}`);
  }

  private setHeader() {
    this.HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf8',
      }),
    };
  }

  load() {
    return this.http.get<any>(`${this.ApiUrl}`);
  }

  store(body: UserDTOModel) {
    return this.http.post<any>(`${this.ApiUrl}`, body);
  }

  destroy(id: number) {
    return this.http.delete<any>(`${this.ApiUrl}/${id}`);
  }

  edit(id: number) {
    return this.http.get<any>(`${this.ApiUrl}/${id}/edit`);
  }

  update(body: UserDTOModel, id: number) {
    return this.http.put<any>(`${this.ApiUrl}/${id}`, body);
  }
}
