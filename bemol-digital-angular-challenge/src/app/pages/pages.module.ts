import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UserPagesModule } from './user-pages/user-pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPagesModule,
    PagesRoutingModule,
    ComponentsModule,
  ],
  exports: [MatIconModule],
})
export class PagesModule {}
