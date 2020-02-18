
export function getMetadata(url: string): Promise<any>;

export function getURL(url: string, format: IParserFormat): Promise<any>;

export interface IParserFormat {
  quality: string;
  container: string;
}