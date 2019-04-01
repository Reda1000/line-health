import { TestBed } from '@angular/core/testing';

import { NgFactoryHealthService } from './ng-factory-health.service';

describe('NgFactoryHealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFactoryHealthService = TestBed.get(NgFactoryHealthService);
    expect(service).toBeTruthy();
  });
});
