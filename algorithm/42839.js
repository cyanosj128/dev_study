function solution(numbers) {
  const numberStrArr = numbers.split('');
  const used = new Array(numberStrArr.length).fill(false);
  const numberSet = new Set();

  registerNumbers(numberStrArr, used, numberSet, '');
  
  return Array.from(numberSet).filter(e => isPrime(e)).length;

}

function hasUsedAll(used) {
  for (const u of used) {
    if (!u) return false;
  }
  return true;
}


function registerNumbers(numberStrArr, used, numberSet, str) {
  if (hasUsedAll(used)) return;

  for (let i = 0; i < numberStrArr.length; i++) {
    if (used[i]) continue;
    numberSet.add(parseInt(numberStrArr[i] + str));
    used[i] = true;
    registerNumbers(numberStrArr, used, numberSet, numberStrArr[i] + str);
    used[i] = false;
  }
}

function isPrime(number) {
  if (number === 0 || number === 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(solution("17"));
console.log(solution("011"));