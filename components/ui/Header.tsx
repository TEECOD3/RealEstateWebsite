import React from "react";
import LogoSVG from "../icons/Logo";
import { Button } from "./button";
import { BiMenu } from "react-icons/bi";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="font-open_sans flex justify-between items-center py-10 px-4 md:px-0 max-w-7xl mx-auto">
      <div className="flex justify-between items-center w-1/2">
        <div className="flex-1">
          <LogoSVG />
        </div>

        <ul className="capitalize  justify-between w-9/12 items-center text-xs font-semibold hidden md:flex ">
          <li>top offers</li>
          <li>search for offers</li>
          <li>references</li>
          <li>about us</li>
          <li>our team</li>
        </ul>
      </div>

      <div className="md:hidden text-3xl">
        <BiMenu />
      </div>
      <div className="hidden md:flex justify-end">
        <Button className="bg-bluecols text-xs font-semibold text-white  ">
          contact us
        </Button>
      </div>
    </header>
  );
};

export default Header;
