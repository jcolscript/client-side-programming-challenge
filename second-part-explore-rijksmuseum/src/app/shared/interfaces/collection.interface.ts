export interface CountFacets {
  hasimage: number;
  ondisplay: number;
}

export interface Links {
  self: string;
  web: string;
}

export interface WebImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface HeaderImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface ArtObject {
  links: Links;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: WebImage;
  headerImage: HeaderImage;
  productionPlaces: string[];
}

export interface Facet {
  key: string;
  value: number;
}

export interface Facets {
  facets: Facet[];
  name: string;
  otherTerms: number;
  prettyName: number;
}

export interface Collection {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
  facets: Facets[];
}

export interface FiltersState {
  page?: number;
  sort?: string | null;
}

export interface ICollectionState {
  artObjects: ArtObject[];
  filters: FiltersState;
  error: boolean;
  loading: boolean;
}
