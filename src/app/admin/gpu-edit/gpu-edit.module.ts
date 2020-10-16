import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpuEditPageRoutingModule } from './gpu-edit-routing.module';

import { GpuEditPage } from './gpu-edit.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GpuEditPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [GpuEditPage]
})
export class GpuEditPageModule {}
