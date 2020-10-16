import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'cpu-edit/:id',
    loadChildren: () => import('./cpu-edit/cpu-edit.module').then( m => m.CpuEditPageModule)
  },
  {
    path: 'ram-edit/:id',
    loadChildren: () => import('./ram-edit/ram-edit.module').then( m => m.RamEditPageModule)
  },
  {
    path: 'gpu-edit/:id',
    loadChildren: () => import('./gpu-edit/gpu-edit.module').then( m => m.GpuEditPageModule)
  },
  {
    path: 'mobo-edit/:id',
    loadChildren: () => import('./mobo-edit/mobo-edit.module').then( m => m.MoboEditPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
