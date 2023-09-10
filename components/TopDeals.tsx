import React from "react";
import { Button } from "./ui/button";
import TopDealsCarousel from "./TopDealsCarousel";

type Props = {};

const TopDeals = (props: Props) => {
  return (
    <div className="bg-gray-100 py-10 flex items-center justify-center min-h-screen md:min-h-[80vh] font-open_sans w-full ">
      <div className="max-w-[80%] mx-auto">
        <div className="w-full ">
          <h4 className="font-merriweather text-3xl md:text-5xl font-bold capitalize">
            top deals
          </h4>
          <div className="w-full flex  flex-col md:flex-row justify-between items-center">
            <p className="w-full mt-6 text-sm  leading-[24px] md:leading-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              architecto esse quibusdam est beatae quaerat perferendis neque
              eligendi autem illo deserunt eaque
            </p>
            <div className="w-full flex items-center md:justify-end">
              <Button
                variant="ghost"
                className=" border-bluecols text-xs border-[2px] text-bluecols mt-4"
              >
                show all offers
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <TopDealsCarousel />
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
