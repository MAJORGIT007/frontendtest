import { useState } from "react";
import reactLogo from "./assets/react.svg";
import cycle from "../public/cycle.jpg";

function App() {
  function handleClick() {
    const eventTitle = document.getElementById("title").innerText;
    window.alert(eventTitle);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-[980px] w-[90%]">
        <img src={cycle} alt="OCBC Cycle" className="md:w-[50%] object-cover" />
        <div className="bg-gray-200 md:w-[50%]  p-5 flex flex-col">
          <h1 id="title" className="font-bold text-sky-400 mb-4 text-xl">
            OCBC Cycle 2015
          </h1>
          <div className="flex gap-5 mb-3">
            <h2 className="font-bold">VENUE</h2>
            <p className="text-gray-600 max-w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="text-sky-400  ml-auto flex justify-center items-center w-[36px] h-[36px]">
              <i className="fa-solid fa-location-dot fa-xl inline-block"></i>
            </div>
          </div>
          <div className="flex gap-5 mb-3">
            <h2 className="font-bold">DATE</h2>
            <p className="text-gray-600">
              15 JUN 2015 <br />
              08:00 AM
            </p>
          </div>
          <a
            href="#"
            onClick={handleClick}
            className="inline-block font-bold text-sky-400 mb-4 hover:underline"
          >
            WEBSITE
          </a>
          <p className="text-gray-600 mb-20">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="flex gap-2 ml-auto">
            <p className="text-gray-600">See similar events</p>
            <button>
              <i className="fa-solid fa-circle-chevron-right fa-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
