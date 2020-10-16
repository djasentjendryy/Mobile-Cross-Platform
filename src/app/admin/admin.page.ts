import { Component, OnInit } from '@angular/core';
import {CpuModel} from '../model/cpu.model';
import {GpuModel} from '../model/gpu.model';
import {MotherboardModel} from '../model/motherboard.model';
import {BarangService} from '../service/barang.service';
import {IonItemSliding, LoadingController, NavController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {RamModel} from '../model/ram.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  cpus: CpuModel[];
  gpus: GpuModel[];
  mobo: MotherboardModel[];
  ram: RamModel[];
  constructor(
      private barangService: BarangService,
      private loadingCtrl: LoadingController,
      private router: Router,
      private toastController: ToastController,
      private navCtrl: NavController
      ) { }

  ngOnInit(){
    this.cpus = this.barangService.getAllCpus();
    this.gpus = this.barangService.getAllGpus();
    this.mobo = this.barangService.getAllMOBO();
    this.ram = this.barangService.getAllRAM();
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
  editCPU(cpu: CpuModel, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(cpu.merCPU, 'udh di create');
  }

  deleteCPU(cpu: CpuModel, slidingItem: IonItemSliding){
    this.barangService.deleteCPU(cpu.idCPU);
    slidingItem.close();
    this.ionViewWillEnter();
    this.deleteToast();
  }

  deleteGPU(gpu: GpuModel, slidingItem: IonItemSliding){
    this.barangService.deleteGPU(gpu.idGPU);
    slidingItem.close();
    this.ionViewWillEnter();
    this.deleteToast();
  }
  deleteMOBO(mobo: MotherboardModel, slidingItem: IonItemSliding){
    this.barangService.deletemobo(mobo.idMOBO);
    slidingItem.close();
    this.ionViewWillEnter();
    this.deleteToast();
  }
  deleteRAM(ram: RamModel, slidingItem: IonItemSliding){
    this.barangService.deleteRam(ram.idRAM);
    slidingItem.close();
    this.ionViewWillEnter();
    this.deleteToast();
  }
  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Item successfully deleted.',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  createGPU(gpu: GpuModel, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(gpu.merkGpu, 'udh di create');
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting recipe...',
      duration: 2000
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
  }

}
