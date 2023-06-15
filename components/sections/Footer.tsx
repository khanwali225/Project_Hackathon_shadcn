import React from "react";

export default function Footer() {
  return (
    <div className="border-t border-black border-r-indigo-50">
      <div className="max-w-[1240px] mx-auto w-full mb-8 mt-8">
        <div className="mx-8 lg:mx-1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-16 ">
            <div className="text-[#666674] text-lg my-2 lg:my-4 px-11 italic">
              Copyright © 2022 Dine Market
            </div>
            <div className="text-[#666674] text-lg my-2 lg:my-4 px-11 italic">
              Design by.{" "}
              <span className="text-black font-bold">Tailwind CSS</span>
            </div>
            <div className="text-[#666674] text-lg my-2 lg:my-4 px-11 italic">
              Code by. <span className="text-black font-bold">Khan Wali</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
