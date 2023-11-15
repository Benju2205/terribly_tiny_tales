import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between md:px-8 md:py-4 lg:px-10 lg:py-4 xsm:flex-col">
      <div className="flex items-center justify-center">
        <Link to="/" className="pr-1.5 border-r-2 border-slate-500">
          <img
            src="https://www.terriblytinytales.com/img/home/ttt.svg"
            className=" lg:w-10"
          />
        </Link>

        <div className="pl-1.5 tracking-widest-plus text-xs font-semibold md:text-sm lg:text-base">
          <span>STORIES</span>
        </div>
      </div>
      <Button className="text-black rounded-md px-2 py-1.5 flex bg-amber-400 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-base">
        Courses
      </Button>
    </header>
  );
};

export default Header;
