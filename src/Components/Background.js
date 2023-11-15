import React from "react";
import profileData from "../profileData.json";

const Background = () => {
  return (
    <>
      <figure>
        {profileData &&
          profileData.about.map((elem) => {
            return (
              <>
                <img
                  className="h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 w-full object-cover object-center"
                  src={elem.backgoundImage}
                  alt="nature image"
                />
              </>
            );
          })}
      </figure>
    </>
  );
};

export default Background;
