import { TestBed } from '@angular/core/testing';

import { ViewPagosService } from './view-pagos.service';

describe('ViewPagosService', () => {
  let service: ViewPagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
