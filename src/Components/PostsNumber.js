import React from "react";
import profileData from "../profileData.json";

const PostsNumber = () => {
  return (
    <>
      {profileData &&
        profileData.postNumber &&
        profileData.postNumber.map((elem) => {
          return (
            <>
              <div className="flex mt-7">
                <div className=" px-5 py-2 border-r-2 border-t-2 border-slate-200 md:px-10 lg:px-14">
                  <span className=" text-sky-400 font-bold lg:text-lg">
                    {elem.postTimes} Posts
                  </span>
                </div>
                <div className=" flex-1 border-b-2 border-slate-200"></div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default PostsNumber;
