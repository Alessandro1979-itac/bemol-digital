import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerificaCepService {
  constructor(private http: HttpClient) {}

  validarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    return this.http.get(url);
  }
}
