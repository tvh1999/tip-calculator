"use client";
import React from "react";
import { DollarSign } from "react-feather";

// bill, numOfPeople, tipPercent
function UserBillForm({
  recieveTipValue,
  inputDataBill,
  setInputDataBill,
  billDataValidation,
  errorStatus,
  updateErrorStatus,
}) {
  const formHandler = function (event) {
    event.preventDefault();
    recieveTipValue("bill", inputDataBill);
    billDataValidation();
  };
  return (
    <form className="relative mb-8 xl:mb-10" onSubmit={formHandler}>
      <div className="flex justify-between">
        <label
          htmlFor="bill"
          className="text-label-color block mb-1 font-bold text-16"
        >
          Bill
        </label>
        {errorStatus.bill && (
          <span className="text-error-color">Can't be zero</span>
        )}
      </div>
      <input
        data-error={errorStatus.bill}
        className={`text-right text-input-icon bg-other-white w-full p-2 rounded font-bold text-25  border-custom-tip-btn-bg-color focus:outline-none focus:border-bright-green border-solid border-2 focus:text-dark-green data-[error=true]:border-error-color`}
        id="bill"
        type="number"
        min={0}
        step="0.01"
        value={inputDataBill}
        onChange={(event) => {
          updateErrorStatus("bill");
          setInputDataBill(event.target.value);
        }}
        required
      />
      <DollarSign
        className="absolute text-input-icon top-11 left-2"
        size={20}
        stroke="currentColor"
      />
    </form>
  );
}

export default UserBillForm;
