import { Component, OnInit } from '@angular/core';
import {RamModel} from '../../model/ram.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../service/barang.service';
import {AlertController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-ram-edit',
  templateUrl: './ram-edit.page.html',
  styleUrls: ['./ram-edit.page.scss'],
})
export class RamEditPage implements OnInit {
  loadedRam: RamModel;
  formRam: RamModel;
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
      this.loadedRam = this.barangService.getRAM(id);
      this.formRam = this.loadedRam;
      console.log(this.formRam);
    });

    this.form = new FormGroup({
      url: new FormControl(this.loadedRam.img, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(this.loadedRam.merkRAM, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadedRam.modelRAM, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.loadedRam.harga, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.loadedRam.stock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      speed: new FormControl(this.loadedRam.speedRAM, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      size: new FormControl(this.loadedRam.size, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  submitEdit(){
    this.formRam.merkRAM = this.form.get('merk').value;
    this.formRam.modelRAM = this.form.get('model').value;
    this.formRam.img = this.form.get('url').value;
    this.formRam.harga = this.form.get('harga').value;
    this.formRam.stock = this.form.get('stok').value;
    this.formRam.speedRAM = this.form.get('speed').value;
    this.formRam.size = this.form.get('size').value;
    this.barangService.updateRam(this.formRam);
    this.nav.navigateBack('/admin');
    this.presentToast();
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
          handler: () => this.submitEdit()
        }
      ]
    });
    await alert.present();
  }

}
