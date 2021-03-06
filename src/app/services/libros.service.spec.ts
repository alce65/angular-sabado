import { TestBed } from '@angular/core/testing';

import { LibrosService } from './libros.service';
import { HttpClientModule } from '@angular/common/http';

describe('LibrosService', () => {
  let service: LibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
