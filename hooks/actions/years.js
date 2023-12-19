"use client";
const CalculateYear = () => {
  const year = new Date().getFullYear();
  let years = new Array(100);

  for (let i = 0; i < years.length; i++) {
    years[i] = { value: year - i, label: year - i };
  }
  return { years };
};
export default CalculateYear ;
