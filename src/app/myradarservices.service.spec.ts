import { TestBed } from '@angular/core/testing';

import { MyradarservicesService } from './myradarservices.service';

describe('MyradarservicesService', () => {
  let service: MyradarservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyradarservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
