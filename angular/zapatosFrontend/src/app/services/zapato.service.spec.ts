import { TestBed, inject } from '@angular/core/testing';

import { ZapatoService } from './zapato.service';

describe('ZapatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZapatoService]
    });
  });

  it('should ...', inject([ZapatoService], (service: ZapatoService) => {
    expect(service).toBeTruthy();
  }));
});
