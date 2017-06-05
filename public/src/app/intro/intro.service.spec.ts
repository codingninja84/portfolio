import { TestBed, inject } from '@angular/core/testing';

import { IntroService } from './intro.service';

describe('IntroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroService]
    });
  });

  it('should ...', inject([IntroService], (service: IntroService) => {
    expect(service).toBeTruthy();
  }));
});
