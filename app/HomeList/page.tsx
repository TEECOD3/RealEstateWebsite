import React from "react";
import HouseList from "./components/HouseList";
import SearchBars from "./components/SearchBars";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="w-full py-16 flex flex-col text-cemter items-center justify-center">
        <h1 className=" text-3xl lg:text-5xl font-black capitalize">
          search for an offer
        </h1>
        <p className="mt-5">choose from the most advantagoes offer</p>
      </div>
      <SearchBars />
      <HouseList />
    </section>
  );
};

export default page;
