import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'cpu/:id',
    loadChildren: () => import('./cpu/cpu.module').then( m => m.CpuPageModule)
  },
  {
    path: 'gpu/:id',
    loadChildren: () => import('./gpu/gpu.module').then( m => m.GpuPageModule)
  },
  {
    path: 'motherboard/:id',
    loadChildren: () => import('./motherboard/motherboard.module').then( m => m.MotherboardPageModule)
  },
  {
    path: 'ram/:id',
    loadChildren: () => import('./ram/ram.module').then( m => m.RamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
