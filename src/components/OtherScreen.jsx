import React from "react";
import '../css/otherscreen.css'
import { FaArrowRight } from "react-icons/fa";


function OtherScreen() {
  const centerDiv = {
    width: "100%",
    height: "auto",
    position: "relative",
    zIndex: "2",
    backgroundColor: "#fff",
    padding: "20px",
    marginTop: "100vh",
  };



  return (
    <>
      <div style={centerDiv}>
        <div className="flex justify-center text-center">
          <img className="w-[90%] h-[80%]" src="img1.png" alt="" />
        </div>
        <h1 className="text-black text-center text-[40px] font-semibold leading-162 tracking-wider mt-[60px]">
          Discover Our Features
        </h1>

        <div className="w-full flex justify-around items-center mt-16 ">
          <button className="btn-3 p-6">
            <span className=" text-[25px] font-parimary text-[#292F36]">Media Upload & Scheduling  </span>
            <div className=" flex flex-col text-[22px] text-[#4D5053] mt-[20px] font-[10px]">
              <span >Easily upload a variety of media types</span>
              <span>such as images, videos, and </span >
              <span>interactive content.</span>
            </div>
            <p className="text-[#4D5053] flex items-center justify-center gap-2 text-center text-sm font-semibold leading-125 tracking-wide">
              Read More <FaArrowRight style={{ color: "#CDA274" }} />
            </p>
          </button>

          <button className="btn-3 p-6">
            <span className=" text-[25px] font-parimary text-[#292F36]">Media Upload & Scheduling  </span>
            <div className=" flex flex-col text-[22px] text-[#4D5053] mt-[20px]  font-[10px]">
              <span>Centralized cloud storage for </span>
              <span>efficient content distribution across</span >
              <span>multiple locations.</span>
            </div>
            <p className="text-[#4D5053] flex items-center justify-center gap-2 text-center text-sm font-semibold leading-125 tracking-wide">
              Read More <FaArrowRight style={{ color: "#CDA274" }} />
            </p>
          </button>

          <button className="btn-3 p-6">
            <span className=" text-[25px] font-parimary text-[#292F36]">Media Upload & Scheduling  </span>
            <div className=" flex flex-col text-[22px] text-[#4D5053] mt-[20px]  font-[10px]">
              <span>User-friendly content creation tools</span>
              <span>with templates and design elements </span >
              <span>for creating engaging visuals.</span>
            </div>
            <p className="text-[#4D5053] flex items-center justify-center gap-2 text-center text-sm font-semibold leading-125 tracking-wide">
              Read More <FaArrowRight style={{ color: "#CDA274" }} />
            </p>
          </button>

        </div>


      </div>
    </>
  );
}

export default OtherScreen;