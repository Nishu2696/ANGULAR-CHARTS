import { TestBed } from '@angular/core/testing';

import { MydoughnutservicesService } from './mydoughnutservices.service';

describe('MydoughnutservicesService', () => {
  let service: MydoughnutservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydoughnutservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
