import { useQuery } from "@tanstack/react-query";
import { Forecast } from "../../types/forecast";

export function useForecat(place: string) {
  const {
    isLoading,
    isError,
    error,
    data: forecast = {} as Forecast,
  } = useQuery<Forecast>({
    queryKey: ["forecast", place],
    queryFn: async () => {
      return await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${place}&days=3`
      ).then(async (res) => {
        if (!res.ok) {
          console.log(res);
          throw new Error(res.status.toString());
        }
        return (await res.json()) as Forecast;
      });
    },
    refetchOnWindowFocus: false,
    staleTime: 6 * 60 * 60 * 1000,
    retry: 3,
  });

  return {
    isLoading,
    isError,
    error,
    forecast,
  };
}
