import Image from "next/image";
import React from "react";
import image from "../public/apart.png";

type Props = {};

const Slide = (props: Props) => {
  return (
    <div className="rounded-sm h-[400px] mx-auto w-80 shadow-xl overflow-hidden group cursor-pointer flex flex-col">
      <div className="relative h-[250px] w-full">
        <Image
          src={image}
          alt="apartmwnt image"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO84wQAAgABIKXpy2MAAAAASUVORK5CYII="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all duration-150 bg-top h-full"
        />
      </div>
      <div className=" px-3 py-8 flex-1 flex flex-col items-start justify-center">
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur a modi nulla{" "}
        </p>
        <h1 className="mt-3">#4000</h1>
        <h2>lagos nigeria</h2>
      </div>
    </div>
  );
};

export default Slide;
