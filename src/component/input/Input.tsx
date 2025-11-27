interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <p className="text-xs text-black font-medium">{label}</p>
      <input
        className="mt-[8px] border-black-text border rounded-xl p-[12px]"
        {...props}
      />
    </div>
  );
};

export default Input;
