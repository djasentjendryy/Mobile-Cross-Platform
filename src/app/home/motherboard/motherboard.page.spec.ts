import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotherboardPage } from './motherboard.page';

describe('MotherboardPage', () => {
  let component: MotherboardPage;
  let fixture: ComponentFixture<MotherboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotherboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
