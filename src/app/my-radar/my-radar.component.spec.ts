import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadarComponent } from './my-radar.component';

describe('MyRadarComponent', () => {
  let component: MyRadarComponent;
  let fixture: ComponentFixture<MyRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
