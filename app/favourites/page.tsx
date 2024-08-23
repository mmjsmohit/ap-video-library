"use client";
import React, { useEffect, useState } from 'react';
import { VideoData, YoutubeResponse } from '@/typings';
import MoviesCarousel from '@/components/MoviesCarousel';
import { createClient } from '@supabase/supabase-js';

function FavouritesPage() {
  const [favouriteVideos, setFavouriteVideos] = useState<VideoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos') || '[]');
    const fetchFavouriteVideos = async () => {
      const allVideos: VideoData[] = await fetchAllVideos();
      const filteredVideos = allVideos.filter(video => savedVideos.includes(video.videoid));
      setFavouriteVideos(filteredVideos);
      setIsLoading(false);
    };

    const fetchAllVideos = async () => {
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
      const data = (await supabase
        .from("youtube_videos")
        .select("*")) as YoutubeResponse;
      return data.data;
    };

    fetchFavouriteVideos();
  }, []);

  return (
    <div className='mt-20'>
      <h1 className="text-2xl font-bold px-10 py-5">Your Favourite Movies</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <MoviesCarousel title="Favourites" videos={favouriteVideos} />
      )}
    </div>
  );
}

export default FavouritesPage;