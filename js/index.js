// Task1 from Nurtilek
const target = 714;
const findFibonacciCombination = (target) => {
  let result = [0, 1];
  for (let i = 2; i < target; i++) {
    const PrevNumFirst = result[i - 1];
    const PrevNumSecond = result[i - 2];
    if (PrevNumFirst * PrevNumSecond >= target) {
      result = result.splice(result.length - 2, 2);
      break;
    }
    result.push(PrevNumFirst + PrevNumSecond);
  }
  result.push(result[0] * result[1] === target);
  return result;
};

console.log(findFibonacciCombination(target));
