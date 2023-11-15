import React, { useState } from "react";
import Footer from "./Footer";
import profileData from "../profileData.json";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
} from "@material-tailwind/react";

const Posts = () => {
  const [openAccordions, setOpenAccordions] = useState(() => {
    const initialState = {};
    profileData.posts.forEach((_, index) => {
      initialState[index] = true;
    });
    return initialState;
  });

  const handleOpen = (value) => {
    setOpenAccordions({ ...openAccordions, [value]: !openAccordions[value] });
  };

  return (
    <>
      {profileData &&
        profileData.posts.map((elem, index) => {
          return (
            <>
              <div className="flex-row items-center justify-center xsm:flex-col mt-10 px-5 md:px-10 lg:px-14">
                <Accordion open={openAccordions[index]} icon="">
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="hover:bg-slate-100"
                  >
                    <div className="w-full flex items-center justify-between">
                      <h3 className=" font-extrabold text-md lg:text-xl ">
                        {elem.postHeading}
                      </h3>
                      <IconButton color="white">
                        <img src={elem.icon} width={19} alt=""/>
                      </IconButton>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex mt-5 ">
                      <a href="/">
                        <span className=" line-clamp-3 lg:text-lg hover:bg-slate-100 font-normal">
                          {elem.postDesc}
                        </span>
                      </a>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>

              <Footer
                footerTitle={elem.footerTitle}
                name={elem.name}
                date={elem.date}
                time={elem.time}
                view={elem.view}
              />
            </>
          );
        })}
    </>
  );
};

export default Posts;
