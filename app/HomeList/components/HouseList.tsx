import Slide from "@/components/Slide";
import React from "react";

type Props = {};

const HouseList = (props: Props) => {
  return (
    <ul className="w-[80%]  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 py-10 gap-y-8 md:gap-x-3">
      <li>
        <Slide />
      </li>

      <Slide />
      <li>
        <Slide />
      </li>
      <li>
        <Slide />
      </li>
      <li>
        <Slide />
      </li>
      <li>
        <Slide />
      </li>
      <li>
        <Slide />
      </li>
    </ul>
  );
};
export default HouseList;
