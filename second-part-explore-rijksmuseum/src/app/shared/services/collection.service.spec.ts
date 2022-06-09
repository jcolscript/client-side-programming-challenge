/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import {
  ArtObject,
  Collection,
  CountFacets,
  Facets,
} from '../interfaces/collection.interface';
import { CollectionService } from './collection.service';

const mockCollection: Collection = {
  artObjects: [] as ArtObject[],
  elapsedMilliseconds: 0,
  count: 0,
  countFacets: {} as CountFacets,
  facets: [] as Facets[],
};

describe('Service: Collection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CollectionService,
        {
          provide: HttpClient,
          useValue: {
            get(): Observable<any> {
              return of(mockCollection);
            },
          },
        },
      ],
    });
  });

  it('should ...', inject([CollectionService], (service: CollectionService) => {
    expect(service).toBeTruthy();
  }));

  it('should call and return something', inject(
    [CollectionService],
    (service: CollectionService) => {
      service
        .getCollection()
        .subscribe((data) => expect(data).toEqual(mockCollection));
    }
  ));
});
