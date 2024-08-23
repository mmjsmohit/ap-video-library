"use client";
import getImagePath from "@/lib/getImagePath";
import { Movie, VideoData } from "@/typings";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function MovieCard({ movie }: { movie: VideoData }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem("savedVideos") || "[]");
    if (savedVideos.includes(movie.videoid)) {
      setIsSaved(true);
    }
  }, [movie.videoid]);

  const handleSave = () => {
    const savedVideos = JSON.parse(localStorage.getItem("savedVideos") || "[]");
    if (!savedVideos.includes(movie.videoid)) {
      savedVideos.push(movie.videoid);
      localStorage.setItem("savedVideos", JSON.stringify(savedVideos));
      setIsSaved(true);
    }
  };

  return (
    <div className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <Link href={`/video/${movie.videoid}`} passHref>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
        <p className="absolute z-20 bottom-5 left-5">{movie.snippet_title}</p>
        <Image
          className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          src={movie.snippet_thumbnails_standard_url}
          alt={movie.snippet_title}
          width={1920}
          height={1080}
          key={movie.videoid}
        />
      </Link>
      <button
        onClick={handleSave}
        className={`absolute top-2 right-2 z-20 p-2 rounded-full ${
          isSaved ? "bg-red-500" : "bg-gray-500"
        }`}
      >
        <HeartIcon />
      </button>
    </div>
  );
}

export default MovieCard;