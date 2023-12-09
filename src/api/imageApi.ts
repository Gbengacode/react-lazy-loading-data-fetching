import axios, { AxiosResponse } from "axios";
import { Image } from "../interface/CatImage";
const CATS_API_ENDPOINT = "https://api.thecatapi.com/v1/images/search?limit=40";

export const fetchImages = async (): Promise<Image[]> => {
  const response: AxiosResponse<Image[]> = await axios.get(CATS_API_ENDPOINT);

  if (!Array.isArray(response.data)) {
    throw new Error("Invalid response format from the API");
  }
  return response.data;
};


