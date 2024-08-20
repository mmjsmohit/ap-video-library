import { Movie, VideoData } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = { title?: string; videos: VideoData[]; isVertical?: boolean };

function MoviesCarousel({ title, videos, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <div
        className={cn(
          "flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? videos.map((video) => (
              <div
                key={video.videoid}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={video} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {video.title} ({video.publishtime?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{video.description}</p>
                </div>
              </div>
            ))
          : videos.map((video) => <MovieCard key={video.videoid} movie={video} />)}
      </div>
    </div>
  );
}

export default MoviesCarousel;
