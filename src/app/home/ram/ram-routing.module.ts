import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamPage } from './ram.page';

const routes: Routes = [
  {
    path: '',
    component: RamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamPageRoutingModule {}
