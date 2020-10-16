import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamEditPage } from './ram-edit.page';

describe('RamEditPage', () => {
  let component: RamEditPage;
  let fixture: ComponentFixture<RamEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
