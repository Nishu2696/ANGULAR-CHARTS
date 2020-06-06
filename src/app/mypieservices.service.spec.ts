import { TestBed } from '@angular/core/testing';

import { MypieservicesService } from './mypieservices.service';

describe('MypieservicesService', () => {
  let service: MypieservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypieservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
