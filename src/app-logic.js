export const calculatingLogic = function (data) {
  if (!data || !data.bill || !data.tipPercent || !data.numOfPeople) return null;
  return {
    total: ((data.bill * +`1.${data.tipPercent}`) / data.numOfPeople).toFixed(
      2
    ),
    tipAmount: (
      ((data.bill / 100) * data.tipPercent) /
      data.numOfPeople
    ).toFixed(2),
  };
};
