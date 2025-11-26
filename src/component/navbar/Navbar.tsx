import Image from "next/image";
import Button from "../button/Button";
import { Logo } from "@/src/assets";

const Navbar = () => {
  return (
    <nav className="w-full rounded-full bg-white/10 backdrop-blur-2xl flex justify-between items-center px-[48px] py-[16px]">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center justify-center gap-[32px]">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white font-medium hover:text-primary hover:font-bold"
        >
          Home
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white font-medium hover:text-primary hover:font-bold"
        >
          Destination
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white font-medium hover:text-primary hover:font-bold"
        >
          Reviews
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white font-medium hover:text-primary hover:font-bold"
        >
          FAQ
        </a>
      </div>
      <Button label="Get Started" variant="secondary" />
    </nav>
  );
};

export default Navbar;
