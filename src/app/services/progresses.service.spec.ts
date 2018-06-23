import { TestBed, inject } from '@angular/core/testing';

import { ProgressesService } from './progresses.service';

describe('ProgressesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressesService]
    });
  });

  it('should be created', inject([ProgressesService], (service: ProgressesService) => {
    expect(service).toBeTruthy();
  }));
});
