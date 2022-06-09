import { ArtObject } from '../interfaces/collection.interface';

export class GetCollection {
  static readonly type = '[COLLECTION API] Get Collection';
  constructor() {}
}

export class ChangeFilter {
  static readonly type = '[COLLECTION] Get Collection with changed page';
  constructor(public payload: string) {}
}

export class ChangePage {
  static readonly type = '[COLLECTION] Get Collection with filter';
  constructor(public payload: number) {}
}

export class GetCollectionSuccess {
  static readonly type = '[COLLECTION API] Get Collection Success';
  constructor(public payload: ArtObject[]) {}
}

export class ClearCollection {
  static readonly type = '[COLLECTION] Clear Collection State';
  constructor() {}
}
