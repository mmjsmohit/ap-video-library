import { SearchResults, VideoData, YoutubeResponse } from "@/typings";
import { createClient } from "@/utils/supabase/server";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const supabase = createClient();
  const data = (await supabase
    .from("youtube_videos")
    .select("*")
    .eq("category", 1)) as YoutubeResponse;

  // const data = await fetchFromTMDB(url);
  return data.data;
}

export async function getVideoDetails(id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("youtube_videos")
    .select("*")
    .eq("videoid", id)
    .limit(1);

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);

  return data[0];
}

export async function getSearchedMovies(term: string) {
  // const url = new URL("https://api.themoviedb.org/3/search/movie");

  // url.searchParams.set("query", term);
  // url.searchParams.set("include_adult", "false");
  // url.searchParams.set("language", "en-US");
  // url.searchParams.set("page", "1");

  // const options: RequestInit = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  //   },
  //   next: {
  //     revalidate: 60 * 60 * 24,
  //   },
  // };

  // const response = await fetch(url.toString(), options);
  // const data = (await response.json()) as SearchResults;
  const supabase = createClient();

  const data = (await supabase
    .from("youtube_videos")
    .select("*")
    .textSearch("snippet_title", term)) as YoutubeResponse;

  return data.data;
}

export async function getUpcomingMovies() {
  const supabase = createClient();

  const data = (await supabase
    .from("youtube_videos")
    .select("*")
    .eq("category", 1)) as YoutubeResponse;

  // const data = await fetchFromTMDB(url);
  return data.data;
  // const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  // const data = await fetchFromTMDB(url);

  // return data.results;
}

export async function getTopRatedMovies() {
  const supabase = createClient();

  // const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  // const data = await fetchFromTMDB(url);

  const data = (await supabase
    .from("youtube_videos")
    .select("*")
    .eq("category", 2)) as YoutubeResponse;
  return data.data;
}

export async function getPopularMovies() {
  const supabase = createClient();

  // const url = new URL("https://api.themoviedb.org/3/movie/popular");
  // const data = await fetchFromTMDB(url);

  const data = (await supabase
    .from("youtube_videos")
    .select("*")
    .eq("category", 3)) as YoutubeResponse;
  return data.data;
}
