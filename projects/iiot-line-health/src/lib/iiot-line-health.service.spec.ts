import { TestBed } from '@angular/core/testing';

import { IiotLineHealthService } from './iiot-line-health.service';

describe('IiotLineHealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IiotLineHealthService = TestBed.get(IiotLineHealthService);
    expect(service).toBeTruthy();
  });
});
