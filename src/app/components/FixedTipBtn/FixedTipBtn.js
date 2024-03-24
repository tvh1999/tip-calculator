import React from "react";

function FixedTipBtn({ amount, recieveTipValue }) {
  const clickHandler = () => recieveTipValue(undefined, amount);
  return (
    <li>
      <button
        className={
          "flex justify-center items-center px-10 w-full py-2 font-semibold rounded-md text-24 bg-dark-green text-white  hover:bg-hover-bg-color hover:text-dark-green"
        }
        onClick={clickHandler}
      >
        <span>{amount}%</span>
      </button>
    </li>
  );
}

export default FixedTipBtn;
