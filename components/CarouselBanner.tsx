"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie, VideoData } from "@/typings";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import Link from "next/link";
import { Button } from "./ui/button";

Autoplay.globalOptions = { delay: 8000, };

function CarouselBanner({ data }: { data: VideoData[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100, }, [
    Autoplay(),
    
  ]);

  return (
    <div
      className="overflow-hidden lg:-mt-40 pb-6 relative"
      ref={emblaRef}
    >
      <div className="flex ">
        {data.map((video) => (
          <div key={video.videoid} className="flex-full min-w-0 relative">
            <Image
              key={video.videoid}
              src={video.thumbnail_high_url}
              alt=""
              width={1920}
              height={1080}
              className="blur-sm"
            />

            <div className="lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white ">
              <h2 className="text-2xl lg:text-5xl font-bold max-w-xl z-50">
                {video.title}
              </h2>
              <p className="lg:text-2xl max-w-xl line-clamp-3">{video.description}</p>
              <Link href={`/video/${video.videoid}`} passHref className="hidden xl:visible">
                <Button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200">
                  Watch Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
}

export default CarouselBanner;
