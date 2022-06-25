import React from 'react';
import { AboutusSec } from '../../data';

export default function Abouthome() {
  const aboutdata = AboutusSec[0];
  return (
    <>
      <div id="mainheight">
        <div
          id="abouthomeimg"
          className="h-medium-height"
          style={{
            backgroundImage:
              'url(' +
              'https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/abouthomeimage.svg' +
              ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div id="maincontainer ">
            <div id="innermaincontainer" className="">
              <div id="backimage">
                <div id="firstmain">
                  <div className="flex justify-center items-center ">
                    <h1 className="text-5xl text-Heading  w-fit 2xl:mt-18 xl:mt-16 lg:mt-12 mb-6 text-center   p-2 font-bold  link link-underline link-underline-black">
                      {aboutdata.headingmain}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-2xl lg:text-Description  2xl:w-3/5 xl:w-3/5 lg:w-4/5 w-fit tracking-wide font-semibold leading-10  flex justify-center items-center text-justify  ">
                      {aboutdata.desc}
                      {/* <br /> <br />
                  {aboutdata.descOne} */}
                    </p>
                  </div>

                  <div
                    id="btn"
                    className="flex justify-center itesm-center mt-16"
                  >
                    <button className="  text-white bg-Lightblue  font-bold  rounded-md shadow-sm hover:shadow-md shadow-blue-shadow hover:shadow-blue-shadowhover  p-5 lg:4/5 lg:w-1/6 md:mb-6  2xl:text-2xl lg:text-md ">
                      See more
                    </button>
                  </div>
                </div>

                {/* <div
            id="secondmain"
            className="flex lg:flex-row flex-col justify-center items-center mt-8 "
          >
            {aboutdata.aboutimg.map((element) => (
              <div id="logo" key={element.id}>
                <img
                  className="mx-2"
                  src={element.logo}
                  alt={element.heading} 
                />
              </div>
            ))}
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
