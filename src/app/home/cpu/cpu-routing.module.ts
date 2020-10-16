import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpuPage } from './cpu.page';

const routes: Routes = [
  {
    path: '',
    component: CpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpuPageRoutingModule {}
