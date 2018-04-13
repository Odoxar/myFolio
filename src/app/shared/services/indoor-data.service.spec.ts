import { TestBed, inject } from '@angular/core/testing';

import { IndoorDataService } from './indoor-data.service';

describe('IndoorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndoorDataService]
    });
  });

  it('should be created', inject([IndoorDataService], (service: IndoorDataService) => {
    expect(service).toBeTruthy();
  }));
});
