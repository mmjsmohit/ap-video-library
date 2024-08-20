import AISuggestion from "@/components/AISuggestion";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation"

interface SearchProps {
    params: {
        term: string
    }
}

async function SearchPage({params: {term}}: SearchProps) {
    if(!term) {
        notFound();
    }

    const termToUse = decodeURI(term);

    //API Call to get searched movies
    const movies = await getSearchedMovies(termToUse);
    //API Call to get the Popular Movies
    const popularMovies = await getPopularMovies();


    return (
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
            <AISuggestion term={termToUse}/>
            <MoviesCarousel title="Movies" videos={movies} isVertical/>
            <MoviesCarousel title="Popular Movies you may like" videos={popularMovies}/>
        </div>
    </div>
  )
}

export default SearchPage