"use client";
import { useGetCountryList } from "@/src/services/useGetCountryList";
import { useRouter } from "next/navigation";
import CountryCard from "./component/CountryCard/CountryCard";

const CountryList = () => {
  const router = useRouter();
  const { countryListData, countryListIsLoading, countryListIsSuccess } =
    useGetCountryList();

  return (
    <div className="py-[80px] flex flex-col justify-center items-center">
      <h2 className="text-h2 text-black-text">
        Where are you travelling next?
      </h2>

      <p className="text-gray text-regular text-center mt-[32px]">
        First, pick your destination, then choose a data plan that fits your
        needs.
        <br />
        Heysim has regional and global plans for all kinds of travel.
      </p>

      <div className="mt-[80px] grid grid-cols-4 gap-x-[32px] gap-y-[32px]">
        {!countryListIsLoading &&
          countryListIsSuccess &&
          countryListData?.map((country, index) => {
            return (
              <CountryCard
                key={index}
                imageSrc={country.imageSrc}
                countryName={country.countryName}
                price={country.price}
                provider={country.provider}
                onClick={() => {
                  router.push(`/checkout/${country.id}`);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CountryList;
