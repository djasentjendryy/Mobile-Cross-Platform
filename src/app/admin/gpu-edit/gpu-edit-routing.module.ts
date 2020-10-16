import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpuEditPage } from './gpu-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GpuEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpuEditPageRoutingModule {}
