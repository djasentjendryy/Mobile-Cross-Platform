import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpuPage } from './gpu.page';

const routes: Routes = [
  {
    path: '',
    component: GpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpuPageRoutingModule {}
