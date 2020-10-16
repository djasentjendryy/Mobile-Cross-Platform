import { Component } from '@angular/core';
import {BarangService} from '../service/barang.service';
import {CpuModel} from '../model/cpu.model';
import {GpuModel} from '../model/gpu.model';
import {MotherboardModel} from '../model/motherboard.model';
import {RamModel} from '../model/ram.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cpus: CpuModel[];
  gpus: GpuModel[];
  mobo: MotherboardModel[];
  ram: RamModel[];
  mode: string;
  constructor(private barangService: BarangService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){
    this.mode = 'list';
    this.cpus = this.barangService.getAllCpus().filter(stock => stock.stock !== 0);
    this.gpus = this.barangService.getAllGpus().filter(stock => stock.stock !== 0);
    this.mobo = this.barangService.getAllMOBO().filter(stock => stock.stock !== 0);
    this.ram = this.barangService.getAllRAM().filter(stock => stock.stock !== 0);
    // tslint:disable-next-line:no-unused-expression
    return this.cpus, this.gpus, this.mobo, this.ram;
  }
  ionViewWillEnter(){
    this.cpus = this.barangService.getAllCpus();
    this.gpus = this.barangService.getAllGpus();
    this.mobo = this.barangService.getAllMOBO();
    this.ram = this.barangService.getAllRAM();
    // tslint:disable-next-line:no-unused-expression
    return this.cpus, this.gpus, this.mobo, this.ram;
    // this.navCtrl.navigateBack('/admin');

  }
  switch(){
    if (this.mode === 'list'){
      this.mode = 'grid';
    }else {
      this.mode = 'list';
    }
    this.ionViewWillEnter();
  }
}
