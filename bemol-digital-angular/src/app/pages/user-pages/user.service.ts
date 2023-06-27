import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserDTOModel } from '../../DTOs/UserDTO.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  ApiUrl: string = environment.host;
  HttpOptions = {};

  constructor(private http: HttpClient, private p_Router: Router) {}

  private genericPost(p_Url: string, p_BodyRequest: any): Observable<any> {
    this.setHeader();

    return this.http.post<any>(
      this.ApiUrl + p_Url,
      p_BodyRequest,
      this.HttpOptions
    );
  }

  private genericGet(p_Url: string): Observable<any> {
    this.setHeader();
    return this.http.get<any>(this.ApiUrl);
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
