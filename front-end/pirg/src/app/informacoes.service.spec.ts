import { TestBed } from '@angular/core/testing';

import { InformacoesService } from './informacoes.service';

describe('InformacoesService', () => {
  let service: InformacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
