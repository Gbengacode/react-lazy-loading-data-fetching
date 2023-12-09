import axios, { AxiosResponse } from "axios";
import { IMovie } from "../interface/Movie";

const MOVIE_API_ENDPOINT = "https://shikimori.one/api/animes?page=1&limit=40";

export const fetchMovies = async (): Promise<IMovie[]> => {
  const response: AxiosResponse<IMovie[]> = await axios.get(MOVIE_API_ENDPOINT);

  if (!Array.isArray(response.data)) {
    throw new Error("Invalid response format from the API");
  }
  return response.data;
};

