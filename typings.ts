export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  category_name: string;
};

export type Genres = {
  error: any;
  data: Genre[];
  count: any;
  status: number;
  statusText: string;
};

// youtubeResponseTypes.ts

export interface YoutubeResponse {
  error: any;
  data: VideoData[];
  count: any;
  status: number;
  statusText: string;
}

export interface VideoData {
  kind: string;
  etag: string;
  videoid: string;
  publishedat: string;
  channelid: string;
  title: string;
  description: string;
  thumbnail_default_url: string;
  thumbnail_default_width: number;
  thumbnail_default_height: number;
  thumbnail_medium_url: string;
  thumbnail_medium_width: number;
  thumbnail_medium_height: number;
  thumbnail_high_url: string;
  thumbnail_high_width: number;
  thumbnail_high_height: number;
  channeltitle: string;
  livebroadcastcontent: string;
  publishtime: string;
}
