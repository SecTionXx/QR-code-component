import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="w-[100%] h-screen bg-[#D6E2F0] flex flex-col justify-center items-center font-Outfit m">
      <div className=" bg-white  text-[15px] rounded-3xl flex flex-col items-center justify-center p-8  mx-10">
        <img
          src="/src/img/image-qr-code.png"
          alt="QR CODE"
          className=" rounded-xl s"
        />
        <div className="font-[700] mt-10 text-[22px]">
          Improve your front-end skill by building projects
        </div>
        <div className="font-[400] mt-10 text-[18px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}

export default App;
