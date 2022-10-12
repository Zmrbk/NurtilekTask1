// Task1 from Nurtilek
const target = 714;
const findFibonacciCombination = (target) => {
  let [a, b] = [0, 1];
  while (a * b < target) {
    [a, b] = [b, a + b];
  }
  return [a, b, a * b === target];
};
console.log(findFibonacciCombination(target));
