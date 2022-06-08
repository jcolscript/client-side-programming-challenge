import { ArtObject, FiltersState } from '../interfaces/collection.interface';

export class GetCollection {
  static readonly type = '[COLLECTION API] Get Collection';
  constructor() {}
}

export class ChangeFilters {
  static readonly type = '[COLLECTION API] Get Collection with filters';
  constructor(public payload: FiltersState) {}
}

export class GetCollectionSuccess {
  static readonly type = '[COLLECTION API] Get Collection Success';
  constructor(public payload: ArtObject[]) {}
}
