import { HeroBg, Quote, TestimonialImg } from "@/src/assets";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div
      className="w-full px-[100px] py-[80px]"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-[12px] rounded-xl bg-white">
        <div className="flex justify-center items-center gap-[48px]">
          <Image
            src={TestimonialImg}
            alt="testimonial-img"
            className="rounded-xl h-[640px] w-[550px] object-cover"
          />

          <div>
            <Image src={Quote} alt="quote" />
            <h5 className="text-h5 font-medium text-black-text mt-[32px]">
              Heysim made it so easy to find the right e-sim for my travel
              needs. It took seconds! I was overwhelmed by choices, but Roamion
              helped me pick the best e-sim card effortlessly.
            </h5>
            <p className="text-xxs text-black-text font-medium mt-[32px]">
              Qailula ZIVARA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
