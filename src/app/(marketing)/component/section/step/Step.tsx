import { Step1, Step2, Step3 } from "@/src/assets";
import Image from "next/image";

const Step = () => {
  return (
    <div className="py-[80px] px-[100px] flex flex-col justify-center items-center">
      <h2 className="text-h2 text-black-text font-medium">
        Getting setup is
        <br />
        as easy as 1, 2, 3!
      </h2>
      <p className="text-grey-text font-regular text-regular mt-[24px]">
        Everything you need to dominate the digital landscape.
      </p>

      <div className="mt-[80px] flex gap-[55px] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image src={Step1} alt="step" />
          <h6 className="text-dark-text text-lg font-medium mt-[48px]">
            Step 1
          </h6>
          <p className="text-dark-text text-regular font-regular mt-[16px]">
            Receive email
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={Step2} alt="step" />
          <h6 className="text-dark-text text-lg font-medium mt-[48px]">
            Step 2
          </h6>
          <p className="text-dark-text text-regular font-regular mt-[16px]">
            Scan QR
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={Step3} alt="step" />
          <h6 className="text-dark-text text-lg font-medium mt-[48px]">
            Step 3
          </h6>
          <p className="text-dark-text text-regular font-regular mt-[16px]">
            Activate and you're good to go!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
