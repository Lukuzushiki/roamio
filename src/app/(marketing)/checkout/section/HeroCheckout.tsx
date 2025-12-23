import { HeroCheckoutBg } from "@/src/assets";
import Navbar from "@/src/component/navbar/Navbar";
import { getStripe } from "@/src/lib/helper/stripe";
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
    isErrorUseCheckoutProduct,
    errorUseCheckoutProduct,
    dataUseCheckoutProduct,
  } = useCheckoutProduct();

  const handleCheckout = async (product: ListProductProps) => {
    try {
      await mutateAsyncUseCheckoutProduct(product);
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  const stripeHandlerCheckout = async () => {
    return await getStripe().checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Roamio - ${dataUseCheckoutProduct?.type} Plan`,
            },
            unit_amount: Math.round((dataUseCheckoutProduct?.price || 1) * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
    });
  };

  useEffect(() => {
    if (isSuccessUseCheckoutProduct && dataUseCheckoutProduct) {
      stripeHandlerCheckout().then((session) => {
        router.push(session.url || "/success");
      });
    }
  }, [isSuccessUseCheckoutProduct, dataUseCheckoutProduct]);

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
