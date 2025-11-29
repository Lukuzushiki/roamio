export interface CardPricingProps {
  isSelected?: boolean;
  quoata: string;
  price: number;
  validity: number;
  onClick?: () => void;
}

const CardPricing = ({
  isSelected,
  quoata,
  price,
  validity,
  onClick,
}: CardPricingProps) => {
  return (
    <div
      className={`w-[217px] p-[12px] border-[1px] rounded-[20px] cursor-pointer transform duration-500 ${
        isSelected
          ? "bg-[#f2f6ff] border-[#114FEE]"
          : "bg-white border-grey-border"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-regular text-black-text">{quoata}</p>
        <p className="text-lg font-semibold text-primary">${price}</p>
      </div>
      <div className="flex justify-between items-center mt-[16px]">
        <p className="text-xxs font-regular text-black-text">Data</p>
        <p className="text-xs font-medium text-black-text">{quoata}</p>
      </div>
      <div className="w-full h-[1px] bg-grey-border my-[8px]" />
      <div className="flex justify-between items-center mt-[16px]">
        <p className="text-xxs font-regular text-black-text">Validity</p>
        <p className="text-xs font-medium text-black-text">{validity} Days</p>
      </div>
    </div>
  );
};

export default CardPricing;
