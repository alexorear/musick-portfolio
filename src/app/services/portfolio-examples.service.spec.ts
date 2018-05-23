import { TestBed, inject } from '@angular/core/testing';

import { PortfolioExamplesService } from './portfolio-examples.service';

describe('PortfolioExamplesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioExamplesService]
    });
  });

  it('should be created', inject([PortfolioExamplesService], (service: PortfolioExamplesService) => {
    expect(service).toBeTruthy();
  }));
});
