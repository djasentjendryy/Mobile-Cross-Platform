import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';
import {MotherboardModel} from '../../model/motherboard.model';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.page.html',
  styleUrls: ['./motherboard.page.scss'],
})
export class MotherboardPage implements OnInit {
  loadedMOBO: MotherboardModel;
  constructor(
      private activatedRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap =>{
      if (!paramMap.has('id')){ return; }
      const id = paramMap.get('id');
      this.loadedMOBO = this.barangService.getMOBO(id);
    });
  }

}
