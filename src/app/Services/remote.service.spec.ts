import { TestBed } from '@angular/core/testing';

import { carService } from './remote.service';

describe('RemoteService', () => {
  let service: carService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(carService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
