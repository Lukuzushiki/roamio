"use client";
import { useState } from "react";
import QuestionList, { QuestionListProps } from "./component/QuestionList";

const FAQ = () => {
  const FAQList: QuestionListProps[] = [
    {
      questionTitle: "What is an eSIM?",
      questionContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      isExpanded: false,
    },
    {
      questionTitle: "Can I top up my eSIM?",
      questionContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      isExpanded: false,
    },
    {
      questionTitle: "What do I do if I delete or lose my eSIM’s QR code?",
      questionContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      isExpanded: false,
    },
    {
      questionTitle: "Do I have to activate data roaming on my device?",
      questionContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      isExpanded: false,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <div className="px-[100px] py-[80px] flex justify-between">
      <div>
        <h3 className="text-h3 font-medium text-black-text">
          Frequently asked questions
        </h3>
        <p className="text-regular font-medium text-grey-text mt-[24px]">
          Find helpful information to answer your questions
        </p>
      </div>

      <div className="w-[660px]">
        {FAQList.map((item, index) => {
          return (
            <div key={index} className={`${index !== 0 && "mt-[16px]"}`}>
              <QuestionList
                questionTitle={item.questionTitle}
                questionContent={item.questionContent}
                isExpanded={expandedIndex === index}
                onClick={() => {
                  if (expandedIndex == index) {
                    setExpandedIndex(null);
                  } else {
                    setExpandedIndex(index);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
