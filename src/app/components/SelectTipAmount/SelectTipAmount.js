"use client";
import React from "react";
import FixedTipBtn from "../FixedTipBtn/FixedTipBtn";
import CustomTipBtn from "../CustomTipBtn/CustomTipBtn";
import { range } from "@/utilities/range";

const TIP_PERCENTS = [5, 10, 15, 25, 50];

function SelectTipAmount({ recieveTipValue, ...customTipProps }) {
  const btnsList = TIP_PERCENTS.map((item, index) => (
    <FixedTipBtn
      key={`${item}-${index}`}
      amount={item}
      recieveTipValue={recieveTipValue}
    />
  ));
  return (
    <section className="mb-8 xl:mb-10">
      <h2 className="text-16 text-label-color block mb-1 font-bold">
        Select Tip %
      </h2>
      <ul className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-3">
        {btnsList}
        <CustomTipBtn recieveTipValue={recieveTipValue} {...customTipProps} />
      </ul>
    </section>
  );
}

export default SelectTipAmount;
