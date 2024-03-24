import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import { calculatingLogic } from "@/app-logic";

function Result({ tipCalData, clearAllUserInputs, resetData }) {
  const calculatingValue = calculatingLogic(tipCalData);

  const resultLabels = [
    {
      label: "tip amount",
      value: calculatingValue?.tipAmount,
    },
    {
      label: "total",
      value: calculatingValue?.total,
    },
  ];
  const resultList = resultLabels.map((item) => (
    <ResultItem
      key={crypto.randomUUID()}
      label={item.label}
      value={item.value}
    />
  ));
  return (
    <section className="flex justify-center flex-col items-center px-4 pt-9 pb-6 bg-dark-green max-w-full w-full rounded-2xl xl:w-103.25 xl:h-104.25 xl:justify-between xl:p-10">
      <ul className="flex flex-col w-full gap-y-5 mb-8">{resultList}</ul>
      <button
        className="max-w-full w-full py-2 text-20 font-bold uppercase text-dark-green rounded-md bg-bright-green hover:bg-hover-bg-color hover:text-dark-green"
        onClick={() => {
          resetData();
          clearAllUserInputs();
        }}
      >
        reset
      </button>
    </section>
  );
}

export default Result;
