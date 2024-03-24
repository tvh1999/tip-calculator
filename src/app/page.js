"use client";
import React from "react";
import UserBillForm from "./components/UserBillForm/UserBillForm";
import UserPeopleForm from "./components/UserPeopleForm/UserPeopleForm";
import SelectTipAmount from "./components/SelectTipAmount/SelectTipAmount";
import Result from "./components/Result/Result";

function Home() {
  const [tipCalData, setTipCalData] = React.useState({
    bill: null,
    numOfPeople: null,
    tipPercent: null,
  });
  const [isRevealInput, setIsRevealInput] = React.useState(false);
  const [inputDataBill, setInputDataBill] = React.useState(0);
  const [inputDataNumOfPeople, setInputDataNumOfPeople] = React.useState(0);
  const [errorStatus, setErrorStatus] = React.useState({
    bill: false,
    numOfPeople: false,
    tipPercent: false,
  });

  const revealCustomTip = () => setIsRevealInput(true);
  const hideCustomTip = () => setIsRevealInput(false);

  const clearAllUserInputs = function () {
    setInputDataBill(0);
    setInputDataNumOfPeople(0);
    setIsRevealInput(false);
  };

  const recieveTipValue = function (typeOfValue = "tipPercent", value) {
    return setTipCalData((prevState) => {
      return {
        ...prevState,
        [typeOfValue]: +value,
      };
    });
  };

  const resetData = () =>
    setTipCalData({
      bill: 0,
      numOfPeople: 0,
      tipPercent: 0,
    });

  const billDataValidation = function () {
    if (+inputDataBill === 0)
      return setErrorStatus({ ...errorStatus, bill: true });
  };

  const peopleDataValidation = function () {
    if (+inputDataNumOfPeople === 0)
      return setErrorStatus({ ...errorStatus, numOfPeople: true });
  };

  const updateErrorStatus = function (typeOfData) {
    setErrorStatus({ ...errorStatus, [typeOfData]: false });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 max-w-full bg-transparent pt-12 xl:w-230 xl:min-h-96">
      <header>
        <h1 className="inline-block uppercase text-app-title max-w-full w-26 min-h-14 tracking-[1em] break-words font-extrabold">
          splitter
        </h1>
      </header>
      <main className="flex flex-col max-w-full max-h-full w-screen bg-white rounded-t-xl p-6 xl:grid xl:grid-cols-2 xl:gap-12">
        <div className="xl:mt-4">
          <UserBillForm
            updateErrorStatus={updateErrorStatus}
            errorStatus={errorStatus}
            billDataValidation={billDataValidation}
            recieveTipValue={recieveTipValue}
            inputDataBill={inputDataBill}
            setInputDataBill={setInputDataBill}
          />
          <SelectTipAmount
            recieveTipValue={recieveTipValue}
            revealCustomTip={revealCustomTip}
            hideCustomTip={hideCustomTip}
            isRevealInput={isRevealInput}
          />
          <UserPeopleForm
            updateErrorStatus={updateErrorStatus}
            errorStatus={errorStatus}
            peopleDataValidation={peopleDataValidation}
            recieveTipValue={recieveTipValue}
            inputDataNumOfPeople={inputDataNumOfPeople}
            setInputDataNumOfPeople={setInputDataNumOfPeople}
          />
        </div>
        <Result
          tipCalData={tipCalData}
          resetData={resetData}
          clearAllUserInputs={clearAllUserInputs}
        />
      </main>
    </div>
  );
}

export default Home;
