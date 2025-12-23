"use client";
import { useGetProductDetailById } from "@/src/services/useGetProductDetailById";
import FAQ from "../../component/section/faq/FAQ";
import Footer from "../../component/section/footer/Footer";
import Step from "../../component/section/step/Step";
import HeroCheckout from "../section/HeroCheckout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ListProductProps } from "../section/component/PriceList/PriceList";
import useGetCountryDetail from "@/src/services/useGetCountryDetail";

export default function CheckoutPage() {
  const params = useParams();
  const { productDetailData, productDetailIsLoading, productDetailIsSuccess } =
    useGetProductDetailById({ id: params.id as string });
  const { countryDetailData } = useGetCountryDetail({
    id: params.id as string,
  });

  const [productList, setProductList] = useState<ListProductProps[]>([]);

  useEffect(() => {
    if (productDetailIsLoading || !productDetailIsSuccess) return;

    const mappedProductList: ListProductProps[] = productDetailData!.map(
      (item) => ({
        id: item.id,
        quota: item.quota,
        price: item.price,
        validity: item.validity,
        type: item.type,
      })
    );

    setProductList(mappedProductList);
  }, [productDetailData, productDetailIsLoading, productDetailIsSuccess]);

  return (
    <div>
      <HeroCheckout
        listProducts={productList}
        countryDetail={
          countryDetailData || {
            id: "",
            countryName: "",
            imageSrc: "",
          }
        }
      />
      <Step />
      <FAQ />
      <Footer />
    </div>
  );
}
