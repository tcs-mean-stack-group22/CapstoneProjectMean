import { TestBed } from '@angular/core/testing';

import { Grocer.ServiceService } from './grocer.service.service';

describe('Grocer.ServiceService', () => {
  let service: Grocer.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grocer.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
