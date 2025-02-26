"use strict"
function solveEquation(a, b, c) {
  let arr = [];


  let d = b ** 2 - 4 * a * c;

    if(d > 0){
      let x1;
      let x2;

      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1, x2);
    } else if(d === 0) {
      let x1;

      x1 = -b / (2 * a);
      arr.push(x1);
    }     
  return arr;
}
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let loanLody = amount - contribution;
  let monthlyPayment = loanLody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalSum = monthlyPayment * countMonths;

  return Number(totalSum.toFixed(2));
}