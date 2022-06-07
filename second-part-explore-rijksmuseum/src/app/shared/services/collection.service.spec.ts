/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { CollectionService } from './collection.service';

describe('Service: Collection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionService],
    });
  });

  it('should ...', inject([CollectionService], (service: CollectionService) => {
    expect(service).toBeTruthy();
  }));
});
