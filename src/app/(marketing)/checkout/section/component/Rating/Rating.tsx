import { StarEmpty, StarFilled } from "@/src/assets";
import Image from "next/image";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="relative size-fit">
      <div className="flex items-center gap-[10px]">
        <Image src={StarEmpty} alt="star-empty" />
        <Image src={StarEmpty} alt="star-empty" />
        <Image src={StarEmpty} alt="star-empty" />
        <Image src={StarEmpty} alt="star-empty" />
        <Image src={StarEmpty} alt="star-empty" />
      </div>
      <div
        className={`flex items-center gap-[10px] absolute top-0 left-0 overflow-hidden`}
        style={{ width: `${(rating / 5) * 100}%` }}
      >
        <Image src={StarFilled} alt="star-filled" />
        <Image src={StarFilled} alt="star-filled" />
        <Image src={StarFilled} alt="star-filled" />
        <Image src={StarFilled} alt="star-filled" />
        <Image src={StarFilled} alt="star-filled" />
      </div>
    </div>
  );
};

export default Rating;
