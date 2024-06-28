import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  },  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'valor-m2-c',
    loadChildren: () => import('./valor-m2-c/valor-m2-c.module').then( m => m.ValorM2CPageModule)
  },
  {
    path: 'guardar',
    loadChildren: () => import('./guardar/guardar.module').then( m => m.GuardarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
