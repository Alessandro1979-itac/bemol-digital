import { Component } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((data: Usuario[]) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  deleteUsuario(id) {
    this.usuarioService.delete(id).subscribe((res) => {
      this.usuarios = this.usuarios.filter((item) => item.id !== id);
      console.log('Usuário removido com sucesso!');
    });
  }
}
