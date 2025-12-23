import { useQuery } from "@tanstack/react-query";
import { request } from "./request";
import { CountryDetailResponse } from "./type";

const useGetCountryDetail = ({ id }: { id: string }) => {
  const {
    data: countryDetailData,
    isLoading: countryDetailIsLoading,
    isError: countryDetailIsError,
    isSuccess: countryDetailIsSuccess,
    refetch: countryDetailRefetch,
  } = useQuery<CountryDetailResponse>({
    queryKey: ["countryDetail", id],
    queryFn: async () => {
      const response = await request.get(`/countries/${id}`);

      return response.data;
    },
    enabled: true,
  });

  return {
    countryDetailData,
    countryDetailIsLoading,
    countryDetailIsError,
    countryDetailIsSuccess,
    countryDetailRefetch,
  };
};

export default useGetCountryDetail;
