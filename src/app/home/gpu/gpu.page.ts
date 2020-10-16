import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';
import {MotherboardModel} from '../../model/motherboard.model';
import {CpuModel} from '../../model/cpu.model';
import {GpuModel} from '../../model/gpu.model';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.page.html',
  styleUrls: ['./gpu.page.scss'],
})
export class GpuPage implements OnInit {
  loadedGpu: GpuModel;
  constructor(
      private activatedRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap =>{
      if (!paramMap.has('id')){ return; }
      const id = paramMap.get('id');
      this.loadedGpu = this.barangService.getGPU(id);
    });
  }

}
