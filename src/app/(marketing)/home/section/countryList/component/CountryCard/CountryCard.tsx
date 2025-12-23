import Image, { StaticImageData } from "next/image";

interface CountryCardProps {
  imageSrc: string | StaticImageData;
  countryName: string;
  provider: string;
  price: number;
  onClick?: () => void;
}

const CountryCard = ({
  imageSrc,
  countryName,
  provider,
  price,
  onClick,
}: CountryCardProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-70">
      <Image
        src={imageSrc}
        alt="country"
        width={242}
        height={150}
        className="rounded-2xl w-[242px] h-[150px] object-cover"
      />
      <p className="text-black-text text-sm mt-[16px]">{provider}</p>
      <div className="flex justify-between items-center">
        <h6 className="font-medium text-lg text-black-text">{countryName}</h6>
        <h6 className="font-medium text-lg text-black-text">${price}</h6>
      </div>
    </div>
  );
};

export default CountryCard;
