import { TestBed } from '@angular/core/testing';

import { ViewCodigosService } from './view-codigos.service';

describe('ViewCodigosService', () => {
  let service: ViewCodigosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCodigosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
