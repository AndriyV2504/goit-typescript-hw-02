import axios from "axios";

export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface FetchPhotosResponse<T> {
  results: T[];
}

const fetchPhotos = async <T extends object>(
  query: string,
  page: number = 1,
  perPage: number = 8
): Promise<FetchPhotosResponse<T>> => {
  const API_KEY = "lfyP73mfHILzu2C-oFJmdLgJm9tc0LVu9oBaiCVj82o";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  return response.data;
};

export default fetchPhotos;
