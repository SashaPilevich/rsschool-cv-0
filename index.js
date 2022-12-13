let positiveNumber = [];
let negativeNumber = [];
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
for (let item of mixedNumbers) {
if (item >= 0) {
  positiveNumber.push(item);
} else if (item < 0) {
  negativeNumber.push(item);
}
}
console.log(positiveNumber);
console.log(negativeNumber);