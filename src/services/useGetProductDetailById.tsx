import { useQuery } from "@tanstack/react-query";
import { CountryListResponse, ProductDetailResponse } from "./type";
import { request } from "./request";

export function useGetProductDetailById({ id }: { id: string }) {
  const {
    data: productDetailData,
    isLoading: productDetailIsLoading,
    isError: productDetailIsError,
    isSuccess: productDetailIsSuccess,
    refetch: productDetailRefetch,
  } = useQuery<ProductDetailResponse[]>({
    queryKey: ["productDetail", id],
    queryFn: async () => {
      const response = await request.get(`/countries/product/${id}`);

      return response.data;
    },
    enabled: true,
  });

  return {
    productDetailData,
    productDetailIsLoading,
    productDetailIsError,
    productDetailIsSuccess,
    productDetailRefetch,
  };
}
