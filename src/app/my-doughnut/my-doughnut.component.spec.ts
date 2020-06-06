import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughnutComponent } from './my-doughnut.component';

describe('MyDoughnutComponent', () => {
  let component: MyDoughnutComponent;
  let fixture: ComponentFixture<MyDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
