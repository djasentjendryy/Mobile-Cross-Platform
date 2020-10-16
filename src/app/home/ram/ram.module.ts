import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamPageRoutingModule } from './ram-routing.module';

import { RamPage } from './ram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamPageRoutingModule
  ],
  declarations: [RamPage]
})
export class RamPageModule {}
