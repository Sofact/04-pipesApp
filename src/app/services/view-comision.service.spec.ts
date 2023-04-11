import { TestBed } from '@angular/core/testing';

import { ViewComisionService } from './view-comision.service';

describe('ViewComisionService', () => {
  let service: ViewComisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewComisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
