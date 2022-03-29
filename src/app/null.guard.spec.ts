import { TestBed } from '@angular/core/testing';

import { NullGuard } from './null.guard';

describe('NullGuard', () => {
  let guard: NullGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NullGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
