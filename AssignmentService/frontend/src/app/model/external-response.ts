export class ExternalResponse {
  constructor(mediaTitle: string, mediaCreators: string[], mediaType: string, mediaSource: string, artWork: string) {
    this._mediaTitle = mediaTitle;
    this._mediaCreators = mediaCreators;
    this._mediaType = mediaType;
    this._mediaSource = mediaSource;
    this._artWork = artWork;
  }

  private _mediaTitle: string;

  get mediaTitle(): string {
    return this._mediaTitle;
  }

  set mediaTitle(value: string) {
    this._mediaTitle = value;
  }

  private _mediaCreators: string[];

  get mediaCreators(): string[] {
    return this._mediaCreators;
  }

  set mediaCreators(value: string[]) {
    this._mediaCreators = value;
  }

  private _mediaType: string;

  get mediaType(): string {
    return this._mediaType;
  }

  set mediaType(value: string) {
    this._mediaType = value;
  }

  private _mediaSource: string;

  get mediaSource(): string {
    return this._mediaSource;
  }

  set mediaSource(value: string) {
    this._mediaSource = value;
  }

  private _artWork: string;

  get artWork(): string {
    return this._artWork;
  }

  set artWork(value: string) {
    this._artWork = value;
  }
}
