import Image from "next/image";
import Hero from "./section/hero/Hero";
import Step from "../component/section/step/Step";
import Testimonial from "../component/section/testimonial/Testimonial";
import FAQ from "../component/section/faq/FAQ";
import Footer from "../component/section/footer/Footer";
import CountryList from "./section/countryList/CountryList";

export default function Home() {
  return (
    <div>
      <Hero />
      <CountryList />
      <Step />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}
