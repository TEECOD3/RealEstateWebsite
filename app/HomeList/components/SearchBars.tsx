import { ComboboxDemo } from "@/components/Combobox";
import { InputWithButton } from "@/components/InputWithButton";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import React from "react";

type Props = {};

const SearchBars = (props: Props) => {
  return (
    <div className="bg-[#F3F3FA] py-20">
      <div className="w-full flex items-center justify-center flex-col gap-y-8 ">
        <InputWithButton />
        <div className="w-full text-center">
          <span className="text-sm font-bold text-gray-500 capitalize">
            filter settings
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4">
          <ComboboxDemo />
          <ComboboxDemo />
          <ComboboxDemo />
          <ComboboxDemo />
        </div>

        <div className="w-full items-center justify-center flex">
          <div className=" w-[80%] lg:w-1/2 mx-auto flex items-center justify-center gap-x-3">
            <span>100</span>
            <Slider />
            <span>200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBars;
