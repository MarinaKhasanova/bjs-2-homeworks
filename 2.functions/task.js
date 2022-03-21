// Задание 1

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
// Ваш код

  for (let i = 0; i< arr.length; i++) {
    sum += arr[i];
    if (arr[i]<min){ min = arr[i]; }
    if (arr[i]>max) { max = arr[i]; }
  }

  avg = sum/arr.length;
  avg = Number(avg.toFixed(2));

    return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  // Ваш код
  let sum = 0;
  for (let i = 0; i< arr.length; i++) {
    sum += arr[i];
  }
return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let s = 0;
  for (let i = 0; i< arrOfArr.length; i++) {
    s = func(arrOfArr[i]);
    if (max < s) { max = s;}
  }
  
  return max;
}


// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = max;
  let s = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < min){ min = arr[i]; }
    if (arr[i] > max) { max = arr[i]; }
  }
  
  s = Math.abs(max - min);
  return s;
}


