// lib/getMovies.ts

import { createClient } from "@/utils/supabase/server";

export async function getVideoDetails(id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("youtube_videos")
    .select("*")
    .eq("videoId", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  console.log(id);

  return data;
}
