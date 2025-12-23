import { useMutation } from "@tanstack/react-query";
import { request } from "./request";
import { ListProductProps } from "../app/(marketing)/checkout/section/component/PriceList/PriceList";

export function useCheckoutProduct() {
  const {
    mutateAsync: mutateAsyncUseCheckoutProduct,
    isSuccess: isSuccessUseCheckoutProduct,
    isError: isErrorUseCheckoutProduct,
    error: errorUseCheckoutProduct,
    data: dataUseCheckoutProduct,
  } = useMutation({
    mutationFn: async (product: ListProductProps) => {
      const response = await request.post("/checkout", { product });
      return response.data;
    },
  });

  return {
    mutateAsyncUseCheckoutProduct,
    isSuccessUseCheckoutProduct,
    isErrorUseCheckoutProduct,
    errorUseCheckoutProduct,
    dataUseCheckoutProduct,
  };
}
