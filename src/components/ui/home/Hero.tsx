import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-white p-48">
      <div>
        <h1 className="text-6xl text-center">
          Ne vous souciez plus des chiffres avec <br />
          <span className="text-[#23D47A] font-bold">O</span>
          <span className="text-[#176CD1] font-bold">tti</span>
        </h1>
      </div>
      <div>
        <button className="text-lg px-3 py-2 m-10 rounded-lg bg-[#176CD1] text-white">
          Calculer
        </button>
      </div>
    </div>
  );
}
