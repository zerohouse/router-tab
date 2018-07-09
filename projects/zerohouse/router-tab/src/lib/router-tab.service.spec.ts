import { TestBed, inject } from '@angular/core/testing';

import { RouterTabService } from './router-tab.service';

describe('RouterTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterTabService]
    });
  });

  it('should be created', inject([RouterTabService], (service: RouterTabService) => {
    expect(service).toBeTruthy();
  }));
});
