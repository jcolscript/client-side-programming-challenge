import { ArtObject } from '../interfaces/artobject.interface';

export class GetArtObject {
  static readonly type = '[ARTOBJECT] Get A ArtObject';
  constructor(public payload: string) {}
}

export class GetArtObjectSuccess {
  static readonly type = '[COLLECTION API] Get Collection Success';
  constructor(public payload: ArtObject) {}
}
