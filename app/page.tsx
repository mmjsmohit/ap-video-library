import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/lib/getMovies";
import Image from "next/image";


export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main >
      <CarouselBannerWrapper/>

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming"/>
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular"/>
      </div>
    </main>
  );
}
