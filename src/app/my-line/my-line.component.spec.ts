import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLineComponent } from './my-line.component';

describe('MyLineComponent', () => {
  let component: MyLineComponent;
  let fixture: ComponentFixture<MyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
