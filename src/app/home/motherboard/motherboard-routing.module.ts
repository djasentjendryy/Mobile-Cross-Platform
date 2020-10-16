import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotherboardPage } from './motherboard.page';

const routes: Routes = [
  {
    path: '',
    component: MotherboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotherboardPageRoutingModule {}
