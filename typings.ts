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
  id: number;
  snippet_publishedat: string;
  snippet_channelid: string;
  snippet_title: string;
  snippet_description: string;
  snippet_thumbnails_default_url: string;
  snippet_thumbnails_default_width: number;
  snippet_thumbnails_default_height: number;
  snippet_thumbnails_medium_url: string;
  snippet_thumbnails_medium_width: number;
  snippet_thumbnails_medium_height: number;
  snippet_thumbnails_high_url: string;
  snippet_thumbnails_high_width: number;
  snippet_thumbnails_high_height: number;
  snippet_thumbnails_standard_url: string;
  snippet_thumbnails_standard_width: number;
  snippet_thumbnails_standard_height: number;
  snippet_thumbnails_maxres_url: string;
  snippet_thumbnails_maxres_width: number;
  snippet_thumbnails_maxres_height: number;
  snippet_channeltitle: string;
  snippet_categoryid: string;
  snippet_livebroadcastcontent: string;
  snippet_localized_title: string;
  snippet_localized_description: string;
  snippet_defaultaudiolanguage: string;
  contentdetails_duration: string;
  contentdetails_dimension: string;
  contentdetails_definition: string;
  contentdetails_caption: boolean;
  contentdetails_licensedcontent: boolean;
  contentdetails_projection: string;
  category: number;
  videoid: string;
}
