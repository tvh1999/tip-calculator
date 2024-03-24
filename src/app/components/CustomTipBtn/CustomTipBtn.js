"use client";
import React from "react";

function CustomTipBtn({
  recieveTipValue,
  isRevealInput,
  revealCustomTip,
  hideCustomTip,
}) {
  const [customTip, setCustomTip] = React.useState(0);

  return (
    <li>
      <button
        className="flex justify-center items-center max-w-full w-31.75 min-h-13 font-semibold rounded-md text-24 bg-custom-tip-btn-bg-color text-custom-tip-btn-color 
        "
        onClick={() => revealCustomTip()}
      >
        {isRevealInput ? (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              recieveTipValue(undefined, customTip);
              setCustomTip(0);
              hideCustomTip();
            }}
          >
            <input
              className="max-w-full w-full text-dark-green py-1 rounded-md bg-custom-tip-btn-bg-color border-custom-tip-btn-bg-color text-right focus:outline-none focus:border-bright-green border-solid border-2 pr-2"
              type="number"
              placeholder="Custom"
              value={customTip}
              onChange={(event) => setCustomTip(event.target.value)}
            />
          </form>
        ) : (
          <span>Custom</span>
        )}
      </button>
    </li>
  );
}

export default CustomTipBtn;
