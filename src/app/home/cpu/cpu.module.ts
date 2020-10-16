import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpuPageRoutingModule } from './cpu-routing.module';

import { CpuPage } from './cpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpuPageRoutingModule
  ],
  declarations: [CpuPage]
})
export class CpuPageModule {}
