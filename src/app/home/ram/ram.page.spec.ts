import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamPage } from './ram.page';

describe('RamPage', () => {
  let component: RamPage;
  let fixture: ComponentFixture<RamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
