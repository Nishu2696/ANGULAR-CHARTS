import { TestBed } from '@angular/core/testing';

import { MylineservicesService } from './mylineservices.service';

describe('MylineservicesService', () => {
  let service: MylineservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylineservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
