// app/video/[id]/page.tsx
import { getVideoDetails } from "@/lib/getMovies";
import Image from "next/image";

interface VideoProps {
  params: {
    id: string;
  };
}

const VideoDetailsPage = async ({ params: { id } }: VideoProps) => {
  let video;

  try {
    video = await getVideoDetails(id);
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
          width={video.thumbnail_high_width}
          height={video.thumbnail_high_height}
          src={video.thumbnail_high_url}
          alt={video.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
          <h1 className="text-4xl font-bold">{video.title}</h1>
          <p className="mt-2">{video.description}</p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Details</h2>
        <p>Release Date: {new Date(video.publishedat).toLocaleDateString()}</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Watch Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
          className="h-96 w-full px-20"
            src={`https://www.youtube.com/embed/${video.videoid}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailsPage;