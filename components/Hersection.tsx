import React from "react";
import Image from "next/image";
import heroimage from "../public/images/pexels-expect-best-323780 2.png";
import { ComboboxDemo } from "./Combobox";
import { Input } from "./ui/input";
import { InputWithButton } from "./InputWithButton";

type Props = {};

const Hersection = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row  max-w-7xl mx-auto min-h-[80vh] font-open_sans  items-center justify-center md:gap-x-10 px-6 sm:px-10 md:px-0">
      <div className="w-full">
        <div className="font-merriweather max-md:w-full ">
          <h3 className="text-5xl lg:text-7xl max-md:text-center leading-[50px]  md:leading-[65px] font-black">
            Modern living <br />
            for everyone
          </h3>
        </div>
        <p className="tracking-tight leading-[30px] md:leading-[33px] mt-4 md:mt-8 max-md:text-center ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam
          nam magnam autem quas odit! Fugit voluptate nam soluta dolorem harum
          autem officia id, perspiciatis eius quaerat at dicta quam.
        </p>

        <div className="w-full bg-gray-300 mt-4 md:mt-8 py-4 px-3 flex gap-x-5 flex-col md:flex-row items-center justify-center">
          <div className="">
            <ComboboxDemo />
          </div>
          <div className="mt-4 md:mt-0">
            <InputWithButton />
          </div>
        </div>
      </div>
      <div className="relative aspect-auto w-full md:h-[500px] max-md:h-[200px] mt-6 md:mt-0">
        <Image
          src={heroimage}
          fill
          className="object-cover "
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8c+dUPQAIIQMDKC2r7gAAAABJRU5ErkJggg=="
          alt="heroimage"
        />
      </div>
    </div>
  );
};

export default Hersection;
