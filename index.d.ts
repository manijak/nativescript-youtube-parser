
export function getMetadata(url: string): Promise<any[]>;

export function getURL(url: string, format: IParserFormat): Promise<any[]>;


export interface IParserFormat {
    quality: Quality;
    container: Container;
}

export type Quality = 'tiny' | 'small' | 'medium' | 'large' | 'hd720' | 'hd1080';

export type Container = 'flv' | '3gp' | 'mp4' | 'webm' | 'ts';
