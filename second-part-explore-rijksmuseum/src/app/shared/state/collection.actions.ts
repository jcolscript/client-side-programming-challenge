import { ArtObject } from "../interfaces/collection.interface";

export class GetCollection {
  static readonly type = '[COLLECTION API] Get Collection';
  constructor() {}
}

export class GetCollectionSuccess {
  static readonly type = '[COLLECTION API] Get Collection Success';
  constructor(public payload: ArtObject[]) {}
}
