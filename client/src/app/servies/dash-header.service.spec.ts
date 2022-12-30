import { TestBed } from '@angular/core/testing';

import { DashHeaderService } from './dash-header.service';

describe('DashHeaderService', () => {
  let service: DashHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
