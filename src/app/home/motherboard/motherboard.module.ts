import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotherboardPageRoutingModule } from './motherboard-routing.module';

import { MotherboardPage } from './motherboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotherboardPageRoutingModule
  ],
  declarations: [MotherboardPage]
})
export class MotherboardPageModule {}
