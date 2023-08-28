import { urlFor } from "@/lib/sanity";
import React from "react";

const Values = ({ data }: any) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col space-y-2">
          <h2 className="text-4xl sm:text-6xl font-bold drop-shadow-lg italic uppercase shadow-red-500">
            {data.title}
          </h2>
          <span className="text-md text-blue-500 font-bold">
            {data.subtitle}
          </span>
          <p className="pt-4 text-md">{data.bodytext}</p>
        </div>
        <img
          src={urlFor(data.image).url()}
          alt="image"
          className="rounded object-cover sm:w-56 sm:h-56 h-56 w-full mb-4 shadow-slate-950"
        />
      </div>
    </div>
  );
};

export default Values;
