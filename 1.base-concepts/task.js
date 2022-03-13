"use strict";
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d;
  d = Math.pow(b,2)-4*a*c;
  if (d < 0) {
    arr = [];
  }  else if (d == 0) {
      let x = -b/(2*a);
      arr = [x];
    }
    else {
      let x = (-b + Math.sqrt(d) )/(2*a);
      let y = (-b - Math.sqrt(d) )/(2*a);
      arr = [x, y];
    }

  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
