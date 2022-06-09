import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArtObejectResponse } from '../interfaces/artobject.interface';
import { Collection } from '../interfaces/collection.interface';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  // eslint-disable-next-line no-unused-vars
  constructor(private httpClient: HttpClient) {}

  getCollection(sort?: string | null, page?: number) {
    const params = {
      s: sort || '',
      p: page || 0,
      key: 'XJP5Ed3Y',
    };

    const queryParams = new HttpParams({ fromObject: params });

    return this.httpClient.get<Collection>(environment.apiUrl, {
      params: queryParams,
    });
  }

  getCollectionArtObject(id: string) {
    const params = {
      key: 'XJP5Ed3Y',
    };

    const queryParams = new HttpParams({ fromObject: params });

    return this.httpClient.get<ArtObejectResponse>(
      `${environment.apiUrl}/${id}`,
      {
        params: queryParams,
      }
    );
  }
}
