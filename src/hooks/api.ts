import { useQuery } from "@tanstack/react-query";

const key = import.meta.env.VITE_APP_API_KEY;

export const useFetchImages = (query: string, page?: number) => {
  const url = `https://api.unsplash.com/search/photos?query=${
    query || "African"
  }&page=${page}&per_page=11&client_id=${key}`;

  const fetchImages = async () => {
    const res = await fetch(url);
    return res.json();
  };

  const { data, isLoading } = useQuery<{
    results: Response[];
    total_pages: number;
  }>({
    queryKey: [query || "African", page],
    queryFn: fetchImages,
  });

  return { data, isLoading };
};

export interface Response {
  id: string;
  created_at: string;
  description: string;
  alt_description: string;
  color: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  user: {
    name: string;
    location: string;
  };
}
