import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamEditPageRoutingModule } from './ram-edit-routing.module';

import { RamEditPage } from './ram-edit.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RamEditPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RamEditPage]
})
export class RamEditPageModule {}
