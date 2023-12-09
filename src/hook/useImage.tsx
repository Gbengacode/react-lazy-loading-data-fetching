import { useQuery } from "@tanstack/react-query"
import { Image } from "../interface/CatImage";
import { fetchImages } from "../api/imageApi";

export const useImages = () => {
    return useQuery<Image[]>( {
      queryKey: ['images'],
      queryFn: () => fetchImages()
    })
    
  };