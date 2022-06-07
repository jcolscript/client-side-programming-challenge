import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Collection } from '../interfaces/collection.interface';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  // eslint-disable-next-line no-unused-vars
  constructor(private httpClient: HttpClient) {}

  getCollection(period?: number, color?: string) {
    const params = {
      ['f.dating.period']: period || '',
      ['f.normalized32Colors.hex']: color || '',
      key: 'XJP5Ed3Y',
    };

    const queryParams = new HttpParams({ fromObject: params });

    return this.httpClient.get<Collection>(environment.apiUrl, { params: queryParams });
  }
}
