import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Genres } from "@/typings";
import { createClient } from "@/utils/supabase/server";
  import { ChevronDown } from "lucide-react";
  import Link from "next/link";
  
  async function GenreDropdown() {
    const supabase = createClient();
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    };

    
    // const response = await fetch(url.toString(), options);
    const data = (await supabase.from('categories').select('*')) as Genres ;
    console.log(data);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          Category <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-[400px] overflow-y-scroll">
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
  
          {data.data.map((category) => (
            <DropdownMenuItem className="cursor-pointer" key={category.id}>
              <Link href={`/genre/${category.id}?genre=${category.category_name}`}>
                {category.category_name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  export default GenreDropdown;
  