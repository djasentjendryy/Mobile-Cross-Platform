import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoboEditPage } from './mobo-edit.page';

describe('MoboEditPage', () => {
  let component: MoboEditPage;
  let fixture: ComponentFixture<MoboEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoboEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoboEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
