import {
  Australia,
  Europe,
  Germany,
  Indonesia,
  Japan,
  Marocco,
  UnitedKingdom,
  UnitedStates,
} from "@/src/assets";
import CountryCard from "./component/CountryCard/CountryCard";

const CountryList = () => {
  const countryListArr = [
    {
      imageSrc: Europe,
      countryName: "Europe",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: Australia,
      countryName: "Australia",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: UnitedStates,
      countryName: "United States",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: Indonesia,
      countryName: "Indonesia",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: Germany,
      countryName: "Germany",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: UnitedKingdom,
      countryName: "United Kingdom",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: Marocco,
      countryName: "Marocco",
      price: "$10",
      onClick: () => {},
    },
    {
      imageSrc: Japan,
      countryName: "Japan",
      price: "$10",
      onClick: () => {},
    },
  ];
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
        {countryListArr.map((country, index) => {
          return (
            <CountryCard
              imageSrc={country.imageSrc}
              countryName={country.countryName}
              price={country.price}
              onClick={country.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
