import axios, { type AxiosResponse } from 'axios';
import { type Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const response: AxiosResponse<FetchMoviesResponse> = await axios.get('https://api.themoviedb.org/3/search/movie', config)

  return response.data.results;
}
