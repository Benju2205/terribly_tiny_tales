import React from "react";
import UserDetail2 from "./UserDetail2";
import profileData from "../profileData.json";
import { Chip } from "@material-tailwind/react";

const UserDetail1 = () => {
  
  return (
    <>
      {profileData &&
        profileData.about &&
        profileData.about.map((elem) => {
          return (
            <>
              <div className="h-auto flex lg:px-14">
                <div className=" container mx-auto text-black  ">
                  <div className=" flex items-start justify-start xsm:flex-col">
                    <a href="/">
                      <img
                        src={elem.profileImage}
                        alt="Profile"
                        className="w-28 h-28 ml-8 md:ml-12 md:w-32 md:h-32 lg:ml-16 lg:w-36 lg:h-36 rounded-full object-cover object-center border-2 border-slate-600 mr-6 relative bottom-6 overflow-hidden xsm:hidden"
                      />
                    </a>

                    <div className=" w-auto flex-col mt-2.5">
                      <div className=" flex items-center justify-between xsm:flex-col lg:gap-2">
                        <h1 className="text-md font-semibold mt-1 lg:text-lg">
                          {elem.name}
                        </h1>
                        <div className="flex items-center justify-center gap-1 pr-1 mt-2">
                          <span className=" text-xs">
                            <img src={elem.badge1} width={15} alt="badge1" />
                          </span>

                          <span className=" text-xs">
                            <img src={elem.badge2} width={15} alt="badge2" />
                          </span>
                        </div>
                      </div>
                      <div className="container mx-auto mt-2.5 flex justify-between p-0 gap-2.5 xsm:flex-col">
                        <div className=" text-center">
                          <Chip
                            variant="outlined"
                            value={elem.followers}
                            className="text-sm font-bold rounded-md text-slate-500 lg:text-base border-2 border-slate-400 px-2 py-0.5 w-16 "
                          />
                          <p className="text-xs font-light text-slate-500 text-center lg:text-sm">
                            Followers
                          </p>
                        </div>
                        <div className=" text-center">
                          <Chip
                            variant="outlined"
                            value={elem.following}
                            className="text-sm font-bold rounded-md text-slate-500 lg:text-base border-2 border-slate-400 px-2 py-0.5 w-16 "
                          />
                          <p className="text-xs font-light text-slate-500 text-center lg:text-sm">
                            Following
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <UserDetail2 />
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default UserDetail1;
