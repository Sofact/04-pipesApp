import { TestBed } from '@angular/core/testing';

import { ViewPagosgroupedService } from './view-pagosgrouped.service';

describe('ViewPagosgroupedService', () => {
  let service: ViewPagosgroupedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPagosgroupedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
