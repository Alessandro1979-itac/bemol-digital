import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'usuario', redirectTo: 'usuario/listar', pathMatch: 'full' },
  { path: 'usuario/listar', component: ListarComponent },
  { path: 'usuario/cadastrar', component: CadastrarComponent },
  { path: 'usuario/editar/:idUsuario', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
