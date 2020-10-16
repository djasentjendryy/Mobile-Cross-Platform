import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpuEditPage } from './cpu-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CpuEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpuEditPageRoutingModule {}
