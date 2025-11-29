import { HeroCheckoutBg } from "@/src/assets";
import Navbar from "@/src/component/navbar/Navbar";
import PriceList from "./component/PriceList/PriceList";

const HeroCheckout = () => {
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

        <PriceList />
      </div>
    </section>
  );
};

export default HeroCheckout;
