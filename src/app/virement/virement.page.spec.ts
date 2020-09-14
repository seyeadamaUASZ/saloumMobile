import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirementPage } from './virement.page';

describe('VirementPage', () => {
  let component: VirementPage;
  let fixture: ComponentFixture<VirementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
