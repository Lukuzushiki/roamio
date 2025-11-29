"use client";

import { Indonesia, Phone } from "@/src/assets";
import Image from "next/image";
import { useState } from "react";
import CardPricing, { CardPricingProps } from "../CardPricing/CardPricing";
import Rating from "../Rating/Rating";

interface ListProductProps extends CardPricingProps {
  id: number;
}

const PriceList = () => {
  const listProduct: ListProductProps[] = [
    {
      id: 1,
      quoata: "1 GB",
      price: 3.99,
      validity: 30,
    },
    {
      id: 2,
      quoata: "3 GB",
      price: 8.99,
      validity: 30,
    },
    {
      id: 3,
      quoata: "5 GB",
      price: 11.99,
      validity: 30,
    },
    {
      id: 4,
      quoata: "10 GB",
      price: 19.99,
      validity: 30,
    },
    {
      id: 5,
      quoata: "15 GB",
      price: 31.99,
      validity: 30,
    },
    {
      id: 6,
      quoata: "20 GB",
      price: 49.99,
      validity: 30,
    },
    {
      id: 7,
      quoata: "30 GB",
      price: 59.99,
      validity: 30,
    },
    {
      id: 8,
      quoata: "50 GB",
      price: 69.99,
      validity: 30,
    },
    {
      id: 9,
      quoata: "100 GB",
      price: 80.99,
      validity: 30,
    },
  ];

  const [productSelected, setProductSelected] =
    useState<ListProductProps | null>(null);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="bg-white rounded-4xl p-[32px]">
      {/* NOTE: Breadcrumbs */}
      <div className="flex items-center">
        <p className="text-xs text-black font-regular">Home</p>
        <p className="text-xs text-black font-regular px-[8px]">{">"}</p>
        <p className="text-xs text-black font-medium">Indonesia</p>
      </div>

      {/* NOTE: Selected Country */}
      <div className="flex justify-between items-center pt-[32px]">
        <div>
          <div className="flex items-center">
            <Image
              src={Indonesia}
              alt="country-flag"
              className="w-[38px] h-[38px] rounded-full"
            />
            <h4 className="text-h4 pl-[16px] text-black font-medium">
              Indonesia
            </h4>
          </div>

          <div className="flex gap-[8px] mt-[16px]">
            <Rating rating={4.5} />

            <p className="font-xs font-regular text-black">
              (4.5 stars) • 10 reviews
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[8px]">
          <Image src={Phone} alt="phone" />
          <p className="text-sm font-medium text-black-text">
            Check Compatibility
          </p>
        </div>
      </div>

      {/* NOTE: Data List */}
      <div
        className="flex justify-center items-center p-[8px] rounded-full size-fit gap-[24px] mt-[32px]"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div
          className={`px-[12px] py-[10px] rounded-full cursor-pointer transition duration-500 ${
            tabIndex === 0 ? "bg-white" : ""
          }`}
          onClick={() => setTabIndex(0)}
        >
          <p className="text-xs font-medium text-black-text">Data Package</p>
        </div>
        <div
          className={`px-[12px] py-[10px] rounded-full cursor-pointer transition duration-500 ${
            tabIndex === 1 ? "bg-white" : ""
          }`}
          onClick={() => setTabIndex(1)}
        >
          <p className="text-xs font-medium text-black-text">Unlimited Data</p>
        </div>
      </div>

      {/* NOTE: Product list */}
      <div className="grid grid-cols-3 gap-[24px] mt-[32px]">
        {listProduct.map((item, index) => {
          return (
            <CardPricing
              key={index}
              {...item}
              onClick={() => setProductSelected(item)}
              isSelected={productSelected?.id === item.id}
            />
          );
        })}
      </div>

      {/* NOTE: Button */}
      <button
        className={`rounded-full px-[24px] py-[16px] cursor-pointer transform duration-200 bg-primary text-white w-full mt-[32px]`}
        onClick={() => {}}
      >
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium whitespace-nowrap">Purchase</p>

          <div className="flex gap-[24px] items-center">
            <div className="w-[1px] h-[46px] bg-white" />
            <div>
              <p className="text-xxs text-white font-medium">Total</p>
              <p className="text-xxs text-white font-medium">
                <span className="font-semibold">$55</span> USD
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default PriceList;
