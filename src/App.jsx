import React, { useState } from "react";
import "./index.css";
import PriceChart from "./Components/PriceChart";
import { MdCloseFullscreen } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
const App = () => {
  const [interval, setInterval] = useState("7days");

  return (
    <div className="p-5">
      <div className="mb-2 mx-5">
        <h1 className="text-4xl font-bold  text-black">
          63,179.71 <sup className="text-[#BDBEBF] text-xl">USD</sup>
        </h1>
        <p className="text-[#67BF6B] font-semibold my-2">+ 2,161.42 (3.54%)</p>
      </div>
      <div className="flex flex-col  min-h-screen  w-full ">
        <div className="mx-5 my-3 border-b-2 border-[#EFF1F3]">
          <ul className="flex gap-10">
            <li className="font-bold  p-1">Summary</li>
            <li className="font-bold border-b-2 border-[#4B40EE]  p-1">
              Chart
            </li>
            <li className="font-bold p-1">Statistics</li>
            <li className="font-bold  p-1">Analysis</li>
            <li className="font-bold  p-1">Settings</li>
          </ul>
        </div>
        <div className="mb-2 w-full flex mx-5">
          <div className="flex w-1/2">
            <ul className="flex  gap-10">
              <li className="flex items-center gap-2 font-semibold text-[#6F7177] text-lg">
                <MdCloseFullscreen />
                <span>FullScreen</span>
              </li>
              <li className="flex items-center gap-2 font-semibold text-[#6F7177] text-lg">
                <BiPlusCircle />
                <span>Compare</span>
              </li>
            </ul>
          </div>
          <div className="mb-2 w-full flex">
            <button
              onClick={() => setInterval("7days")}
              className={`mx-2 px-2 py-1 text-lg rounded-md ${
                interval === "7days"
                  ? "bg-[#4B40EE] text-white"
                  : "text-[#6F7177]"
              }`}
            >
              1w
            </button>
            <button
              onClick={() => setInterval("30days")}
              className={`mx-2 px-2 py-1 text-lg rounded-md ${
                interval === "30days"
                  ? "bg-[#4B40EE] text-white"
                  : "text-[#6F7177]"
              }`}
            >
              1m
            </button>
            <button
              onClick={() => setInterval("365days")}
              className={`mx-2 px-2 py-1 text-lg rounded-md ${
                interval === "365days"
                  ? "bg-[#4B40EE] text-white"
                  : "text-[#6F7177]"
              }`}
            >
              1y
            </button>
          </div>
        </div>
        <PriceChart interval={interval} />
      </div>
    </div>
  );
};

export default App;
