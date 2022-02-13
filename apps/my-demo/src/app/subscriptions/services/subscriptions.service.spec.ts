import { TestBed } from '@angular/core/testing';

import { Subscriptionservice } from './subscriptions.service';

describe('Subscriptionservice', () => {
  let service: Subscriptionservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subscriptionservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
