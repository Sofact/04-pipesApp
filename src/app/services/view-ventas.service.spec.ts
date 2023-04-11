import { TestBed } from '@angular/core/testing';

import { ViewVentasService } from './view-ventas.service';

describe('ViewVentasService', () => {
  let service: ViewVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
