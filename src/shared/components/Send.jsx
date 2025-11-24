import React from "react";
import { Link } from "react-router-dom";

function Send({ mode, onClick }) {
  if (mode === "donate") {
    return (
      <button
        onClick={onClick}
        className="h-[64px] pt-[15px] pb-[15px] w-[717px] bg-[#7A2E11] rounded-4xl px-4 text-[18px] text-white hover:bg-gray-700 transition"
      >
        Send
      </button>
    );
  }
  if (mode === "Contact") {
    return (
      <button
        onClick={onClick}
        className="h-[64px] pt-[15px] pb-[15px] w-[717px] bg-[#7A2E11] rounded-4xl px-4 text-[18px] text-white hover:bg-gray-700 transition"
      >
        Send
      </button>
    );
  }
  return (
    <Link to="/Donate">
      <button className="h-[64px] pt-[15px] pb-[15px] w-[717px] bg-[#7A2E11] rounded-4xl px-4 text-[18px] text-white hover:bg-gray-700 transition">
        Send
      </button>
    </Link>
  );
}

export default Send;
