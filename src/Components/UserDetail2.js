import React from "react";
import profileData from "../profileData.json";
import { IconButton } from "@material-tailwind/react";

const UserDetail2 = () => {
  return (
    <>
      <div className="flex xsm:flex-col mb-5 ">
        <div className="flex-row items-start justify start ml-8 md:ml-12 lg:ml-16 ">
          {profileData &&
            profileData.about &&
            profileData.about.map((elem) => {
              return (
                <>
                  <h3
                    key={elem.id}
                    className=" text-md tracking-tight font-normal text-slate-700 lg:text-xl"
                  >
                    {elem.bio}
                  </h3>
                  <a href="/" className="xsm:hidden">
                    <span
                      key={elem.id}
                      className=" text-sky-400 text-sm font-normal lg:text-base"
                    >
                      {elem.link}
                    </span>
                  </a>
                </>
              );
            })}
          <div className="flex xsm:flex-col gap-3 items-center justify-start mt-1">
            {profileData &&
              profileData.icons &&
              profileData.icons.map((elem) => {
                return (
                  <>
                    <div className="flex mt-1 ">
                      <div className="flex w-auto xsm:flex-col ">
                        <div className="flex items-center justify-start gap-1 lg:mr-3">
                          <div className="flex items-start justify-start">
                            <IconButton color="white" className="w-auto">
                              <img
                                key={elem.id}
                                src={elem.icon}
                                alt="img"
                                width={23}
                              />
                            </IconButton>
                          </div>
                          <span key={elem.id} className="text-sm font-normal">
                            {elem.caption}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail2;
