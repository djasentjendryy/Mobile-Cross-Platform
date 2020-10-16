import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpuPage } from './cpu.page';

describe('CpuPage', () => {
  let component: CpuPage;
  let fixture: ComponentFixture<CpuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
