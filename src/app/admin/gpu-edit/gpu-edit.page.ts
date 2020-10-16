import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';
import {AlertController, NavController, ToastController} from '@ionic/angular';
import {GpuModel} from '../../model/gpu.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gpu-edit',
  templateUrl: './gpu-edit.page.html',
  styleUrls: ['./gpu-edit.page.scss'],
})
export class GpuEditPage implements OnInit {
  loadedGpu: GpuModel;
  formGpu: GpuModel;
  form: FormGroup;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService,
      private nav: NavController,
      private toastController: ToastController,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')){ return; }
      const id = paramMap.get('id');
      this.loadedGpu = this.barangService.getGPU(id);
      this.formGpu = this.loadedGpu;
      console.log(this.formGpu);
    });

    this.form = new FormGroup({
      url: new FormControl(this.loadedGpu.imgGPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(this.loadedGpu.merkGpu, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadedGpu.modelGPU, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.loadedGpu.harga, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.loadedGpu.stock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  submitEdit(){
    this.formGpu.merkGpu = this.form.get('merk').value;
    this.formGpu.modelGPU = this.form.get('model').value;
    this.formGpu.imgGPU = this.form.get('url').value;
    this.formGpu.harga = this.form.get('harga').value;
    this.formGpu.stock = this.form.get('stok').value;
    this.barangService.updateGPU(this.formGpu);
    this.nav.navigateBack('/admin');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'GPU has been Updated',
      color: 'primary',
      duration: 2000
    });
    await toast.present();
  }

  async AlertEdit(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to edit this GPU?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.submitEdit()
        }
      ]
    });
    await alert.present();
  }
}
