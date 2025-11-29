interface ButtonProps {
  label: string;
  variant: "primary" | "secondary" | "outline";
  onClick?: () => void;
  buttonClassName?: string;
}

const Button = ({
  label,
  variant = "primary",
  onClick,
  buttonClassName,
}: ButtonProps) => {
  const variantStyling = (variant: "primary" | "secondary" | "outline") => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary/40";
      case "secondary":
        return "bg-white text-black-text hover:bg-grey-text/10";
      case "outline":
        return "bg-transparent border border-black-text text-black-text hover:bg-grey-text/10";
      default:
        return "rounded-full bg-primary text-white hover:bg-primary/40";
    }
  };

  return (
    <button
      className={`rounded-full px-[24px] py-[16px] cursor-pointer transform duration-200 ${variantStyling(
        variant
      )} ${buttonClassName}`}
      onClick={onClick}
    >
      <p className="text-sm font-medium whitespace-nowrap">{label}</p>
    </button>
  );
};

export default Button;
