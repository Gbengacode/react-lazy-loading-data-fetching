import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movieApi";
import { IMovie } from "../interface/Movie";
export const useMovie = () => {
  return useQuery<IMovie[]>({
    queryKey: ['movies'],
    queryFn: () => fetchMovies()
  })
};

