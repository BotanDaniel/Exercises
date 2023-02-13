// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measurement = {
//     type: "temperature",
//     unit: "celsius",
//     // C) FIX
//     // value: Number(prompt("Degrees celsius:")),
//     value: 10,
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//HOW TO DO IT
// 1. Create a for lopp.
// 2. Loop trough the array and print each rezult.
// 3. Print the day rezult in the string
//4. call the function and check the rezult

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in day ${i + 1}`);
  }
};

printForecast(data1);
printForecast(data2);
