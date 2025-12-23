import { useQuery } from "@tanstack/react-query";
import { CountryListResponse } from "./type";
import { request } from "./request";

export function useGetCountryList() {
  const {
    data: countryListData,
    isLoading: countryListIsLoading,
    isError: countryListIsError,
    isSuccess: countryListIsSuccess,
    refetch: countryListRefetch,
  } = useQuery<CountryListResponse[]>({
    queryKey: ["countryList"],
    queryFn: async () => {
      const response = await request.get("/countries");

      return response.data;
    },
    enabled: true,
  });
  return {
    countryListData,
    countryListIsLoading,
    countryListIsError,
    countryListIsSuccess,
    countryListRefetch,
  };
}
