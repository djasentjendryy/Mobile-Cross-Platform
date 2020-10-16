import { Injectable } from '@angular/core';
import {CpuModel} from '../model/cpu.model';
import {GpuModel} from '../model/gpu.model';
import {MotherboardModel} from '../model/motherboard.model';
import {RamModel} from '../model/ram.model';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  private cpus: CpuModel[] = [
    {
      idCPU: 'C1',
      merCPU: 'Intel',
      modelCPU: 'i5-9500h',
      baseclockCPU: 3.5,
      boostclockCPU: 4.3,
      imgCPU: 'https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i5-9500_05_ad_l.jpg',
      coreCPU: 4,
      threadCPU: 8,
      stock: 10,
      harga: 192000
    },
    {
      idCPU: 'C2',
      merCPU: 'AMD',
      modelCPU: 'i5-1000h',
      baseclockCPU: 3.5,
      boostclockCPU: 4.3,
      imgCPU: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
      coreCPU: 6,
      threadCPU: 12,
      stock: 10,
      harga: 225000
    }
  ];
  private gpus: GpuModel[] = [
    {
      idGPU: 'G1',
      merkGpu: 'VGA Asus GeForce RTX 2060 SUPER 8GB DDR6 - Strix Gaming OC',
      modelGPU: 'GeForce RTX 2060',
      imgGPU: 'https://cf.shopee.co.id/file/02da5edbba5a53981ba40f1edc841072',
      harga: 1000000,
      stock: 10
    },
    {
      idGPU: 'G2',
      merkGpu: 'VGA Asus GeForce RTX 2070 SUPER 8GB DDR6 - Strix Gaming OC',
      modelGPU: 'GeForce RTX 2070',
      imgGPU: 'https://cf.shopee.co.id/file/78980aac844b0b3a64ff7626dc5336d1',
      harga: 1200000,
      stock: 10
    }
  ];
  private motherboard: MotherboardModel[] = [
    {
      idMOBO: 'MB1',
      merkMOBO: 'Motherboard / Mainboard AMD MSI B450 TOMAHAWK MAX (AM4,B450,DDR4)',
      modelMOBO: 'MSI B450',
      chipsetMOBO: 'Z490',
      img: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/10/14/21373708/21373708_71079362-5f94-441e-8e4a-0612c189021e_800_800',
      recomMOBO: 'AMD',
      harga: 120000,
      stock: 10
    },
    {
      idMOBO: 'MB2',
      merkMOBO: 'ASRock H310CM-HDV (LGA1151, H310, DDR4, USB3.1, SATA3)',
      modelMOBO: 'ASRock B450',
      chipsetMOBO: 'Z490',
      // tslint:disable-next-line:max-line-length
      img: `https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/14/batch-upload/batch-upload_37ceee48-7fbc-4c71-9ad1-e6adcf343631.png`,
      recomMOBO: 'AMD',
      harga: 110000,
      stock: 10
    }
  ];
  private ram: RamModel[] = [
    {
      idRAM: 'R1',
      merkRAM: 'Vgen',
      modelRAM: 'ddr4',
      speedRAM: 3400,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Swissbit_2GB_PC2-5300U-555.jpg/1200px-Swissbit_2GB_PC2-5300U-555.jpg',
      size: 14,
      harga: 12000,
      stock: 10
    },
    {
      idRAM: 'R2',
      merkRAM: 'Vgen',
      modelRAM: 'ddr4',
      speedRAM: 3400,
      img: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/8/22/21864697/21864697_145379f7-8144-41d4-bdf8-d0a692643151_1470_1470',
      size: 17,
      harga: 12000,
      stock: 10
    }
  ];
  constructor() { }

  getAllCpus(){
    return [...this.cpus];
  }
  getAllGpus(){
    return [...this.gpus];
  }
  getAllMOBO(){
    return [...this.motherboard];
  }
  getAllRAM(){
    return [...this.ram];
  }
  getCPU(id: string){
    return {...this.cpus.find( cpu =>  {
        return cpu.idCPU === id;
      })};
  }

  getGPU(id: string){
    return {...this.gpus.find( gpu =>  {
        return gpu.idGPU === id;
      })};
  }
  getMOBO(id: string){
    return {...this.motherboard.find( mobo =>  {
        return mobo.idMOBO === id;
      })};
  }
  getRAM(id: string){
    return {...this.ram.find( ram =>  {
        return ram.idRAM === id;
      })};
  }

  deleteCPU(id: string){
    this.cpus = this.cpus.filter( cpu => {
      return cpu.idCPU !== id;
    });
  }
  updateCpu(cpu: CpuModel){
    this.cpus.find(x => x.idCPU === cpu.idCPU).merCPU = cpu.merCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).modelCPU = cpu.modelCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).imgCPU = cpu.imgCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).harga = cpu.harga;
    this.cpus.find(x => x.idCPU === cpu.idCPU).stock = cpu.stock;
    this.cpus.find(x => x.idCPU === cpu.idCPU).baseclockCPU = cpu.baseclockCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).boostclockCPU = cpu.boostclockCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).coreCPU = cpu.coreCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).threadCPU = cpu.threadCPU;
  }


  deleteGPU(id: string){
    this.gpus = this.gpus.filter( gpu => {
      return  gpu.idGPU !== id;
    });
  }
  updateGPU(gp: GpuModel){
    this.gpus.find(x => x.idGPU === gp.idGPU).merkGpu = gp.merkGpu;
    this.gpus.find(x => x.idGPU === gp.idGPU).modelGPU = gp.modelGPU;
    this.gpus.find(x => x.idGPU === gp.idGPU).imgGPU = gp.imgGPU;
    this.gpus.find(x => x.idGPU === gp.idGPU).harga = gp.harga;
    this.gpus.find(x => x.idGPU === gp.idGPU).stock = gp.stock;
  }

  deletemobo(id: string){
    this.motherboard = this.motherboard.filter(mobo => {
      return mobo.idMOBO !== id;
    });
  }
  updateMobo(mobo: MotherboardModel){
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).merkMOBO = mobo.merkMOBO;
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).modelMOBO = mobo.modelMOBO;
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).img = mobo.img;
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).harga = mobo.harga;
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).stock = mobo.stock;
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).recomMOBO = mobo.recomMOBO;
    this.motherboard.find(x => x.idMOBO === mobo.idMOBO).chipsetMOBO = mobo.chipsetMOBO;
  }

  deleteRam(id: string){
    this.ram = this.ram.filter(rm => {
      return rm.idRAM !== id;
    });
  }
  updateRam(rm: RamModel){
    this.ram.find(x => x.idRAM === rm.idRAM).merkRAM = rm.merkRAM;
    this.ram.find(x => x.idRAM === rm.idRAM).modelRAM = rm.modelRAM;
    this.ram.find(x => x.idRAM === rm.idRAM).img = rm.img;
    this.ram.find(x => x.idRAM === rm.idRAM).harga = rm.harga;
    this.ram.find(x => x.idRAM === rm.idRAM).stock = rm.stock;
    this.ram.find(x => x.idRAM === rm.idRAM).speedRAM = rm.speedRAM;
    this.ram.find(x => x.idRAM === rm.idRAM).size = rm.size;
  }

  newCpu(cp: CpuModel){
    this.cpus.push(cp);
  }

  newGpu(gp: GpuModel){
    this.gpus.push(gp);
  }

  newRam(rm: RamModel){
    this.ram.push(rm);
  }

  newMobo(mb: MotherboardModel){
    this.motherboard.push(mb);
  }

  lastIDCPU(){
    return 'C' + (this.cpus.length + 1);
  }

  lastIDGPU(){
    return 'G' + (this.gpus.length + 1);
  }

  lastIDRam(){
    return 'R' + (this.ram.length + 1);
  }

  lastIDMobo(){
    return 'MB' + (this.motherboard.length + 1);
  }
}
