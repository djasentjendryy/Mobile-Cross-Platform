import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpuEditPage } from './cpu-edit.page';

describe('CpuEditPage', () => {
  let component: CpuEditPage;
  let fixture: ComponentFixture<CpuEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpuEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
