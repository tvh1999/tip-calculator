import React from "react";
import { DollarSign } from "react-feather";

function ResultItem({ label, value = "0.00" }) {
  return (
    <li className="flex w-full justify-between gap-x-26 ">
      <div className="flex flex-col justify-center">
        <h3 className="text-16 text-white font-bold capitalize">{label}</h3>
        <span className="text-14 text-deep-color font-bold">/ person</span>
      </div>
      <p className="flex items-center text-32 text-bright-green font-bold xl:text-48">
        <DollarSign className="inline" size={32} />
        <span>{value}</span>
      </p>
    </li>
  );
}

export default ResultItem;
