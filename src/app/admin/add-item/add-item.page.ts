import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CpuModel} from '../../model/cpu.model';
import {GpuModel} from '../../model/gpu.model';
import {RamModel} from '../../model/ram.model';
import {MotherboardModel} from '../../model/motherboard.model';
import {BarangService} from '../../service/barang.service';
import {AlertController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  form: FormGroup;
  cpu: CpuModel;
  gpu: GpuModel;
  ram: RamModel;
  mobo: MotherboardModel;
  modelselect: string;
  // 1 cpu, 2 ram, 3mobo, 4 gpu
  constructor(
      private barangService: BarangService,
      private nav: NavController,
      private alertCtrl: AlertController,
      private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.modelselect = 'a';
    this.form = new FormGroup({
      url: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      modelselected: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      merk: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      basec: new FormControl(null, {
        updateOn: 'blur',
      }),
      boostc: new FormControl(null, {
        updateOn: 'blur',
      }),
      core: new FormControl(null, {
        updateOn: 'blur',
      }),
      thread: new FormControl(null, {
        updateOn: 'blur',
      }),
      speed: new FormControl(null, {
        updateOn: 'blur',
      }),
      size: new FormControl(null, {
        updateOn: 'blur',
      }),
      chipset: new FormControl(null, {
        updateOn: 'blur',
      }),
      recom: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
  }
  add(){
    if (this.modelselect === 'cpu'){
      this.cpu = {
        idCPU: this.barangService.lastIDCPU(),
        merCPU: this.form.get('merk').value,
        modelCPU: this.form.get('model').value,
        baseclockCPU: this.form.get('basec').value,
        boostclockCPU: this.form.get('boostc').value,
        imgCPU: this.form.get('url').value,
        coreCPU: this.form.get('core').value,
        threadCPU: this.form.get('thread').value,
        harga: this.form.get('harga').value,
        stock: this.form.get('stok').value,
      };
      this.barangService.newCpu(this.cpu);
    }else if (this.modelselect === 'mobo'){
      this.mobo = {
        idMOBO: this.barangService.lastIDMobo(),
        merkMOBO: this.form.get('merk').value,
        modelMOBO: this.form.get('model').value,
        chipsetMOBO: this.form.get('chipset').value,
        img: this.form.get('url').value,
        recomMOBO: this.form.get('recom').value,
        harga: this.form.get('harga').value,
        stock: this.form.get('stok').value,
      };
      this.barangService.newMobo(this.mobo);
    }else if (this.modelselect === 'ram'){
      this.ram = {
        idRAM: this.barangService.lastIDRam(),
        merkRAM: this.form.get('merk').value,
        modelRAM: this.form.get('model').value,
        speedRAM: this.form.get('speed').value,
        img: this.form.get('url').value,
        size: this.form.get('size').value,
        harga: this.form.get('harga').value,
        stock: this.form.get('stok').value,
      };
      this.barangService.newRam(this.ram);
    }else {
      this.gpu = {
        idGPU: this.barangService.lastIDGPU(),
        merkGpu: this.form.get('merk').value,
        modelGPU: this.form.get('model').value,
        imgGPU: this.form.get('url').value,
        harga: this.form.get('harga').value,
        stock: this.form.get('stok').value,
      };
      this.barangService.newGpu(this.gpu);
    }
    this.nav.navigateBack('/admin');
    this.toast();
  }

  async alertAdd(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to add this Item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.add()
        }
      ]
    });
    await alert.present();
  }

  async toast() {
    const toast = await this.toastController.create({
      message: 'Item Added.',
      color: 'primary',
      duration: 2000
    });
    toast.present();
  }
}
