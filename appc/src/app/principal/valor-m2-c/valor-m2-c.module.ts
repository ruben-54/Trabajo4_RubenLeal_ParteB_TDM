import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorM2CPageRoutingModule } from './valor-m2-c-routing.module';

import { ValorM2CPage } from './valor-m2-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorM2CPageRoutingModule
  ],
  declarations: [ValorM2CPage]
})
export class ValorM2CPageModule {}
