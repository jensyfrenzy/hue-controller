import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HueHubComponent } from './hue-hub.component';

describe('HueBulbComponent', () => {
  let component: HueHubComponent;
  let fixture: ComponentFixture<HueHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HueHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HueHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
