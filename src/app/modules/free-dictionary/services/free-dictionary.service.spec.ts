import { TestBed } from '@angular/core/testing';

import { FreeDictionaryService } from './free-dictionary.service';

describe('FreeDictionaryService', () => {
  let service: FreeDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
