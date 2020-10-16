import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpuPageRoutingModule } from './gpu-routing.module';

import { GpuPage } from './gpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpuPageRoutingModule
  ],
  declarations: [GpuPage]
})
export class GpuPageModule {}
