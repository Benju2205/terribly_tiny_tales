import React from "react";
import profileData from "../profileData.json";

const Footer = (props) => {
  return (
    <>
      <div className="flex xsm:flex-col items-center justify-between mt-10 px-5 pb-7 border-b-2 border-slate-200  md:px-10 lg:px-14">
        <div className="text-xs">
          <span className="text-sky-400  font-semibold">
            {props.footerTitle}{" "}
          </span>
          <span className=" font-semibold">
            by {props.name.toLowerCase()}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs font-light text-slate-500 text-center">
            {props.date}
          </span>
          <span className=" text-slate-500">•</span>
          <span className="text-xs font-light text-slate-500 text-center">
            {props.time}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs font-light text-slate-500 text-center">
            {props.view} views
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
