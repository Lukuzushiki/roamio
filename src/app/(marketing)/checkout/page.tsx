import FAQ from "../component/section/faq/FAQ";
import Footer from "../component/section/footer/Footer";
import Step from "../component/section/step/Step";
import HeroCheckout from "./section/HeroCheckout";

export default function CheckoutPage() {
  return (
    <div>
      <HeroCheckout />
      <Step />
      <FAQ />
      <Footer />
    </div>
  );
}
