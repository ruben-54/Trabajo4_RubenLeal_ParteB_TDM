import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorM2CPage } from './valor-m2-c.page';

const routes: Routes = [
  {
    path: '',
    component: ValorM2CPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorM2CPageRoutingModule {}
