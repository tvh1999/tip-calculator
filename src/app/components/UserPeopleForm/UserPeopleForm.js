"use client";
import React from "react";
import { User } from "react-feather";

// bill, numOfPeople, tipPercent
function UserPeopleForm({
  recieveTipValue,
  inputDataNumOfPeople,
  setInputDataNumOfPeople,
  peopleDataValidation,
  errorStatus,
  updateErrorStatus,
}) {
  const formHandler = function (event) {
    event.preventDefault();
    recieveTipValue("numOfPeople", inputDataNumOfPeople);
    peopleDataValidation();
  };
  return (
    <form className="relative mb-8 xl:mb-10" onSubmit={formHandler}>
      <div className="flex justify-between">
        <label
          htmlFor="peopleNumber"
          className="text-label-color block mb-1 font-bold text-16"
        >
          Number of People
        </label>
        {errorStatus.numOfPeople && (
          <span className="text-error-color">Can't be zero</span>
        )}
      </div>
      <input
        data-error={errorStatus.numOfPeople}
        className={`text-right text-input-icon bg-other-white w-full p-2 rounded font-bold text-25  border-custom-tip-btn-bg-color focus:text-dark-green focus:outline-none focus:border-bright-green border-solid border-2 data-[error=true]:border-error-color`}
        id="peopleNumber"
        type="number"
        min={0}
        step="1"
        value={inputDataNumOfPeople}
        onChange={(event) => {
          updateErrorStatus("numOfPeople");
          setInputDataNumOfPeople(event.target.value);
        }}
        required
      />
      <User
        className="absolute text-input-icon top-11 left-2"
        stroke="currentColor"
      />
    </form>
  );
}

export default UserPeopleForm;
