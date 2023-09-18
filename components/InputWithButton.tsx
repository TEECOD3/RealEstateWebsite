import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HiLocationMarker, HiSearch } from "react-icons/hi";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-4">
      <div className="w-full relative">
        <HiLocationMarker className="absolute top-3 left-2 text-gray-400" />
        <Input type="email" placeholder="    search location" className="" />
      </div>

      <Button
        type="submit"
        className="flex gap-x-2 items-center justify-center text-xs bg-bluecols flex-1 px-8"
      >
        <HiSearch /> search
      </Button>
    </div>
  );
}
