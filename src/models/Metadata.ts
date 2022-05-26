export interface ProjectMetadata {
  title: string;
  dateString: string;
  img: string;
  excerpt: string;
}

export interface DiscographyMetadata {
  title: string;
  albumType: string;
  length: string;
  releaseDate: string;
  year: number;
  albumArt: string;
  trackNum: number;
}

export interface BlogMetadata {
  title: string;
  excerpt: string;
  dateString: string;
  blogType: string;
  tags: string[];
}