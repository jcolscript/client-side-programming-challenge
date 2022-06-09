export interface Links {
  search: string;
}

export interface WebImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface Color {
  percentage: number;
  hex: string;
}

export interface ColorsWithNormalization {
  originalHex: string;
  normalizedHex: string;
}

export interface NormalizedColor {
  percentage: number;
  hex: string;
}

export interface Normalized32Colors {
  percentage: number;
  hex: string;
}

export interface PrincipalMaker {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision?: any;
  dateOfDeath: string;
  dateOfDeathPrecision?: any;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality?: any;
  biography?: any;
  productionPlaces: any[];
  qualification: string;
  labelDesc: string;
}

export interface Acquisition {
  method: string;
  date: Date;
  creditLine: string;
}

export interface Dating {
  presentingDate: string;
  sortingDate: number;
  period: number;
  yearEarly: number;
  yearLate: number;
}

export interface Classification {
  iconClassIdentifier: string[];
  iconClassDescription: string[];
  motifs: any[];
  events: any[];
  periods: any[];
  places: any[];
  people: any[];
  objectNumbers: string[];
}

export interface Dimension {
  unit: string;
  type: string;
  precision?: any;
  part: string;
  value: string;
}

export interface Label {
  title: string;
  makerLine: string;
  description: string;
  notes: string;
  date: string;
}

export interface ArtObject {
  links: Links;
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder?: any;
  webImage: WebImage;
  colors: Color[];
  colorsWithNormalization: ColorsWithNormalization[];
  normalizedColors: NormalizedColor[];
  normalized32Colors: Normalized32Colors[];
  titles: string[];
  description: string;
  labelText?: any;
  objectTypes: string[];
  objectCollection: string[];
  makers: any[];
  principalMakers: PrincipalMaker[];
  plaqueDescriptionDutch: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  artistRole?: any;
  associations: any[];
  acquisition: Acquisition;
  exhibitions: any[];
  materials: string[];
  techniques: any[];
  productionPlaces: any[];
  dating: Dating;
  classification: Classification;
  hasImage: boolean;
  historicalPersons: any[];
  inscriptions: any[];
  documentation: string[];
  catRefRPK: any[];
  principalOrFirstMaker: string;
  dimensions: Dimension[];
  physicalProperties: any[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  label: Label;
  showImage: boolean;
  location: string;
}

export interface AdlibOverrides {
  titel?: any;
  maker?: any;
  etiketText?: any;
}

export interface ArtObjectPage {
  id: string;
  similarPages: any[];
  lang: string;
  objectNumber: string;
  tags: any[];
  plaqueDescription: string;
  audioFile1?: any;
  audioFileLabel1?: any;
  audioFileLabel2?: any;
  createdOn: Date;
  updatedOn: Date;
  adlibOverrides: AdlibOverrides;
}

export interface ArtObejectResponse {
  elapsedMilliseconds: number;
  artObject: ArtObject;
  artObjectPage: ArtObjectPage;
}

export interface IArtObejectState {
  artObject: ArtObject | null;
  error: boolean;
  loading: boolean;
}
