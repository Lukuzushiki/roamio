import Navbar from "@/src/component/navbar/Navbar";
import "../../../globals.css";

import { HeroBg, Search } from "@/src/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`w-full h-[900px] py-[24px] px-[100px] flex justify-between items-center flex-col`}
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="w-full">
        <h1 className="text-h1 text-white font-medium">
          Stay connected
          <br />
          wherever you go
        </h1>
        <p className="text-regular text-white mt-[24px] font-regular">
          With Holafly’s eSIM, enjoy internet connection on every adventure
          <br />
          and forget about expensive roaming bills upon your return.
        </p>

        <div className="flex w-[560px] justify-between items-center rounded-full bg-white pl-[24px] pr-[8px] py-[16px] mt-[32px]">
          <div>
            <p className="text-xs text-black-text font-medium">
              Where do you need internet?
            </p>

            <input
              className="mt-4 border-none outline-none"
              placeholder="Search destinations"
              type="text"
            ></input>
          </div>

          <button className="bg-primary rounded-full p-[16px]">
            <Image src={Search} alt="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
