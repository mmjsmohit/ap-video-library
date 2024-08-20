import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/lib/getMovies";
import Image from "next/image";


export default async function Home() {
  const videos1 = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main >
      <CarouselBannerWrapper/>

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel videos={videos1} title="Karma "/>
        <MoviesCarousel videos={topRatedMovies} title="Veganism 🌳" />
        <MoviesCarousel videos={popularMovies} title="Advait 🪔"/>
      </div>
    </main>
  );
}
