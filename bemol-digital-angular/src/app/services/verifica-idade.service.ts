import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class VerificaIdadeService {
  constructor() {}

  idadeMinimaValidator(control: FormControl) {
    const dataNascimento = new Date(control.value);
    const dataAtual = new Date();
    const diferencaAnos =
      dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (diferencaAnos < 18) {
      return {
        idadeMinima: {
          valid: false,
        },
      };
    }

    return null;
  }
}
