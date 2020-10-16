import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';
import {AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CpuModel} from '../../model/cpu.model';

@Component({
  selector: 'app-cpu-edit',
  templateUrl: './cpu-edit.page.html',
  styleUrls: ['./cpu-edit.page.scss'],
})
export class CpuEditPage implements OnInit {
  loadedCpu: CpuModel;
  formCpu: CpuModel;
  form: FormGroup;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService,
      private nav: NavController,
      private loadingCtrl: LoadingController,
      private toastController: ToastController,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')){ return; }
      const id = paramMap.get('id');
      this.loadedCpu = this.barangService.getCPU(id);
      this.formCpu = this.loadedCpu;
    });

    this.form = new FormGroup({
      url: new FormControl(this.loadedCpu.imgCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(this.loadedCpu.merCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadedCpu.modelCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.loadedCpu.harga, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.loadedCpu.stock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      basec: new FormControl(this.loadedCpu.baseclockCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boostc: new FormControl(this.loadedCpu.boostclockCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      core: new FormControl(this.loadedCpu.coreCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      thread: new FormControl(this.loadedCpu.threadCPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  Edit(){
    this.formCpu.merCPU = this.form.get('merk').value;
    this.formCpu.modelCPU = this.form.get('model').value;
    this.formCpu.imgCPU = this.form.get('url').value;
    this.formCpu.harga = this.form.get('harga').value;
    this.formCpu.stock = this.form.get('stok').value;
    this.formCpu.baseclockCPU = this.form.get('basec').value;
    this.formCpu.boostclockCPU = this.form.get('boostc').value;
    this.formCpu.coreCPU = this.form.get('core').value;
    this.formCpu.threadCPU = this.form.get('thread').value;
    // this.presentLoading().then(() => {
    this.barangService.updateCpu(this.formCpu);
    this.nav.navigateBack('/admin');
    this.presentToast();
    // });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Updating Barang',
      duration: 2000
    });

    await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'CPU has been Updated',
      color: 'primary',
      duration: 2000
    });
    await toast.present();
  }

  async AlertEdit(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to edit this CPU?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.Edit()
        }
      ]
    });
    await alert.present();
  }

}
