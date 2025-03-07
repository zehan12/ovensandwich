import React, { useState } from "react";

// react icons
import { Quote, Star } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="w-full mt-8 md:mt-0 max-w-xs p-4 shadow-2xl rounded-lg relative">
      <Quote className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
      <h2 className="text-stone-400 text-6xl tracking-tighter font-secondary font-extrabold mt-16">
        Lorem ipsum, dolor sit amet!
      </h2>

      <div className="flex items-start mt-5 justify-between">
        <div>
          <h2 className="text-[1.2rem] font-[600]">Jhone Dehon</h2>
          <p className="text-[1rem] text-[#727272]">CEO of Miracle</p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_) => (
            <Star className=" text-[#ffba24] lg:size-5 size-4" />
          ))}
        </div>
      </div>
      <Quote className="absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
    </div>
  );
};

export default Testimonial;
