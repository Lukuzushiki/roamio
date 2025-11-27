import { Minus, Plus } from "@/src/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface QuestionListProps {
  questionTitle: string;
  questionContent: string;
  isExpanded: boolean;
  onClick?: () => void;
}

const QuestionList = ({
  questionTitle,
  questionContent,
  isExpanded,
  onClick,
}: QuestionListProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isExpanded) {
      setMaxHeight(el.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  });
  return (
    <div
      onClick={onClick}
      className="border-black-border border-[1px] rounded-xl px-[24px] py-[20px] cursor-pointer hover:opacity-80 transform duration-200"
    >
      <div className="flex justify-between items-center">
        <p className="text-md text-black-text font-medium">{questionTitle}</p>
        <div className="flex bg-primary rounded-xl w-[48px] h-[48px] justify-center items-center">
          <Image src={isExpanded ? Minus : Plus} alt="icon" />
        </div>
      </div>
      <p
        ref={contentRef}
        style={{ maxHeight }}
        className={`text-sm text-black-text font-regular overflow-hidden transition-max-height duration-300 ease-in-out ${
          isExpanded ? "opacity-100 mt-[20px]" : "opacity-0"
        }`}
      >
        {questionContent}
      </p>
    </div>
  );
};

export default QuestionList;
