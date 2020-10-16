import { Component, OnInit } from '@angular/core';
import {CpuModel} from '../../model/cpu.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.page.html',
  styleUrls: ['./cpu.page.scss'],
})
export class CpuPage implements OnInit {
  loadedCPU: CpuModel;
  constructor(
      private activatedRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap =>{
      if (!paramMap.has('id')){ return; }
      const id = paramMap.get('id');
      this.loadedCPU = this.barangService.getCPU(id);
    });
  }

}
