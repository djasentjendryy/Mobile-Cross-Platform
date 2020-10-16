import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpuPage } from './gpu.page';

describe('GpuPage', () => {
  let component: GpuPage;
  let fixture: ComponentFixture<GpuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
