import { HeroCheckoutBg } from "@/src/assets";
import Navbar from "@/src/component/navbar/Navbar";
import { CountryDetailResponse } from "@/src/services/type";
import { useCheckoutProduct } from "@/src/services/useCheckoutProduct";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PriceList, { ListProductProps } from "./component/PriceList/PriceList";

interface HeroCheckoutProps {
  listProducts: ListProductProps[];
  countryDetail: CountryDetailResponse;
}

const HeroCheckout = ({ listProducts, countryDetail }: HeroCheckoutProps) => {
  const router = useRouter();
  const {
    mutateAsyncUseCheckoutProduct,
    isSuccessUseCheckoutProduct,
    dataUseCheckoutProduct,
  } = useCheckoutProduct();

  const handleCheckout = async (product: ListProductProps) => {
    try {
      await mutateAsyncUseCheckoutProduct(product);
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  const stripeHandlerCheckout = async (
    checkoutData: Pick<ListProductProps, "price" | "type">,
  ) => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: checkoutData.price,
        type: checkoutData.type,
      }),
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      throw new Error(result.error || "Failed to create checkout session");
    }

    return (await response.json()) as { url?: string };
  };

  useEffect(() => {
    if (isSuccessUseCheckoutProduct && dataUseCheckoutProduct) {
      stripeHandlerCheckout(dataUseCheckoutProduct)
        .then((session) => {
          router.push(session.url || "/success");
        })
        .catch((error) => {
          console.error("Stripe checkout failed:", error);
        });
    }
  }, [isSuccessUseCheckoutProduct, dataUseCheckoutProduct, router]);

  return (
    <section
      className="px-[48px] pt-[24px] pb-[64px]"
      style={{
        backgroundImage: `url(${HeroCheckoutBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="flex justify-between items-center mt-[43px] gap-[24px]">
        <h1 className="text-h1 text-white font-medium">Live like a local</h1>

        <PriceList
          listProducts={listProducts}
          countryDetail={countryDetail}
          onCheckout={(product) => {
            // Handle checkout logic here
            handleCheckout(product);
          }}
        />
      </div>
    </section>
  );
};

export default HeroCheckout;
