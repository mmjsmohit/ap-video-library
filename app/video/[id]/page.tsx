// app/video/[id]/page.tsx
import { getVideoDetails } from "@/lib/getMovies";
import { VideoData } from "@/typings";
import Image from "next/image";

const formatDuration = (duration: string): string => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return duration;

  const hours = match[1] ? parseInt(match[1].replace('H', '')) : 0;
  const minutes = match[2] ? parseInt(match[2].replace('M', '')) : 0;
  const seconds = match[3] ? parseInt(match[3].replace('S', '')) : 0;

  const formatted = [
    hours > 0 ? `${hours}h` : null,
    minutes > 0 ? `${minutes}m` : null,
    seconds > 0 ? `${seconds}s` : null,
  ]
    .filter(Boolean)
    .join(' ');

  return formatted;
};

interface VideoProps {
  params: {
    id: string;
  };
}

const VideoDetailsPage = async ({ params: { id } }: VideoProps) => {
  let video;

  try {
    video = await getVideoDetails(id) as VideoData;
    console.log(video);
  } catch (error) {
    console.error("Failed to fetch video details:", error);
    return <div>Video not found</div>;
  }

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white">
      <div className="relative">
        <Image
          width={video.snippet_thumbnails_high_width}
          height={video.snippet_thumbnails_high_height}
          src={video.snippet_thumbnails_high_url}
          alt={video.snippet_title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
          <h1 className="text-4xl font-bold">{video.snippet_title}</h1>
          <p className="mt-2">{video.snippet_description.substring(0, 100)}</p>
          {video.snippet_description.length > 100 && (
            <button className="text-blue-500 hover:underline">Read more</button>
          )}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Details</h2>
        <p>Release Date: {new Date(video.snippet_publishedat).toLocaleDateString()}</p>
        {/* Duration */}
        <p>Duration: {formatDuration(video.contentdetails_duration)}</p>
      </div>
      <div className="p-4 flex-col mx-auto items-center">
        <h2 className="text-2xl font-bold">Watch Video</h2>
        <iframe
          className="w-[1280px] mx-auto my-20 aspect-video"
          src={`https://www.youtube.com/embed/${video.videoid}`}
          title={video.snippet_description}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDetailsPage;