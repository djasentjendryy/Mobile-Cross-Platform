import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpuEditPage } from './gpu-edit.page';

describe('GpuEditPage', () => {
  let component: GpuEditPage;
  let fixture: ComponentFixture<GpuEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpuEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
