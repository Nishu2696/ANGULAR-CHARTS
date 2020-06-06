import { TestBed } from '@angular/core/testing';

import { MybarservicesService } from './mybarservices.service';

describe('MybarservicesService', () => {
  let service: MybarservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybarservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
