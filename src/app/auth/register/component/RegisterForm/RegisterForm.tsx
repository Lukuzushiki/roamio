import { LogoColor } from "@/src/assets";
import Button from "@/src/component/button/Button";
import Input from "@/src/component/input/Input";
import Image from "next/image";

const RegisterForm = () => {
  return (
    <div className="bg-white rounded-3xl flex justify-center items-center flex-col p-[48px] w-[480px]">
      <Image src={LogoColor} alt="logo" />

      <h5 className="text-black-text text-h5 font-medium mt-[32px] text-center">
        Sign Up
      </h5>
      <p className="text-grey-text text-regular font-regular mt-[12px] text-center">
        Already purchased an eSIM?
      </p>
      <p className="text-grey-text text-regular font-regular text-center">
        Sign Up to Roamio Center to manage it.
      </p>

      <div className="flex justify-center items-center mt-[32px]">
        <Input
          type="text"
          placeholder="Name"
          label="Name"
          inputClassName="w-[384px]"
        />
      </div>

      <div className="flex justify-center items-center mt-[16px]">
        <Input
          type="email"
          placeholder="Email"
          label="Email"
          inputClassName="w-[384px]"
        />
      </div>

      <div className="flex justify-center items-center mt-[16px]">
        <Input
          type="password"
          required
          placeholder="Password"
          label="Password"
          inputClassName="w-[384px]"
        />
      </div>

      <div className="w-full mt-[16px]">
        <Button label="Sign Up" variant="primary" buttonClassName="w-full" />
      </div>

      <div className="flex justify-center items-center mt-[32px]">
        <p className="text-regular text-black-text font-regular">
          Already have an account?{" "}
          <a href="/auth/login" className="text-primary">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
