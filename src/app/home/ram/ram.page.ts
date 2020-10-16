import { Component, OnInit } from '@angular/core';
import {RamModel} from '../../model/ram.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.page.html',
  styleUrls: ['./ram.page.scss'],
})
export class RamPage implements OnInit {
  loadedRam: RamModel;
  constructor(
      private activatedRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap =>{
      if (!paramMap.has('id')){ return; }
      const id = paramMap.get('id');
      this.loadedRam = this.barangService.getRAM(id);
    })
  }

}
