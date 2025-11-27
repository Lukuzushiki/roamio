import { LinkText, LogoColor } from "@/src/assets";
import Button from "@/src/component/button/Button";
import Input from "@/src/component/input/Input";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-[100px] py-[80px]">
      <div className="flex justify-between">
        {/* NOTE: Navgation Footer */}
        <div>
          <Image
            src={LogoColor}
            alt="logo"
            className="w-[115px] h-[42px] object-cover"
          />

          <div className="flex items-center gap-[32px] mt-[24px]">
            <a href="#">
              <p className="text-xs text-black-text font-medium hover:opacity-80 transform duration-200">
                Home
              </p>
            </a>
            <a href="#">
              <p className="text-xs text-black-text font-medium hover:opacity-80 transform duration-200">
                About
              </p>
            </a>
            <a href="#">
              <p className="text-xs text-black-text font-medium hover:opacity-80 transform duration-200">
                Testimonial
              </p>
            </a>
            <a href="#">
              <p className="text-xs text-black-text font-medium hover:opacity-80 transform duration-200">
                Faq
              </p>
            </a>
          </div>
        </div>

        {/* NOTE: Subscribe Footer */}
        <div>
          <p className="font-medium text-sm text-black-text">Subscribe</p>

          <div className="flex gap-[16px] mt-[16px]">
            <Input placeholder="Enter your email" />
            <Button label="Try for free" variant="primary" />
          </div>

          <p className="text-xxs text-grey-text mt-[12px] underline">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>

      <Image src={LinkText} alt="link-text" className="mt-[48px] mb-[32px]" />

      <div className="flex justify-between items-center border-t-[1px] border-black-border">
        <div className="flex gap-[24px] items-center mt-[32px]">
          <a href="#">
            <p className="text-xs text-black-text underline font-regular">
              Privacy Policy
            </p>
          </a>
          <a href="#">
            <p className="text-xs text-black-text underline font-regular">
              Terms of Service
            </p>
          </a>
          <a href="#">
            <p className="text-xs text-black-text underline font-regular">
              Cookie Settings
            </p>
          </a>
        </div>
        <p className="text-xs text-black-text font-regular">
          © 2024 Relume. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
