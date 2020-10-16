import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamEditPage } from './ram-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RamEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamEditPageRoutingModule {}
