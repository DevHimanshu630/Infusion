import React from "react";
// import '../css/OtherScreen.css'
function OtherScreen() {
  const centerDiv = {
    width: "100%",
    height: "auto",
    position: "relative",
    zIndex: "2",
    backgroundColor: "#fff", // Adjust background color as needed
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
        <div className="w-full flex justify-around mt-[60px]">
          <div className="flex flex-col items-center justify-center w-[393px] p-10  h-auto border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:border-solid">
            <h2 className="text-gray-800 text-center text-[25px] font-normal leading-125">
              Media Upload & Scheduling{" "}
            </h2>
            <p className="text-[#4D5053] text-center text-[22px] w-[358px]  tracking-tighter">
              Easily upload a variety of media types such as images, videos, and
              interactive content.
            </p>
            <p className="text-[#4D5053] text-center text-sm font-semibold leading-125 tracking-wide">
              Read More
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-[393px] p-10  h-auto border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:border-solid">
            <h2 className="text-gray-800 text-center text-[25px] font-normal leading-125">
              Cloud Based Management{" "}
            </h2>
            <p className="text-[#4D5053] text-center text-[22px] w-[358px]  tracking-tighter">
              Centralized cloud storage for efficient content distribution
              across multiple locations.
            </p>
            <p className="text-[#4D5053] text-center text-sm font-semibold leading-125 tracking-wide">
              Read More
            </p>
          </div>

          <div className="relative group overflow-hidden">
            <div className="flex flex-col items-center justify-center w-[393px] p-10 h-auto">
              <h2 className="text-gray-800 text-center text-[25px] font-normal leading-125">
                Media Upload & Scheduling
              </h2>
              <p className="text-[#4D5053] text-center text-[22px] w-[358px] tracking-tighter">
                Easily upload a variety of media types such as images, videos,
                and interactive content.
              </p>
              <p className="text-[#4D5053] text-center text-sm font-semibold leading-125 tracking-wide">
                Read More
              </p>
            </div>
            <div className="absolute top-0 left-0 w-0 h-full border-t-2 border-transparent transition-all duration-300 group-hover:w-full group-hover:border-blue-500 group-hover:border-solid"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherScreen;
