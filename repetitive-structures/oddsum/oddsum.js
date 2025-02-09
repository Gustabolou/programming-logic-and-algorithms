const x = Number(prompt('Enter the first integer: '));
const y = Number(prompt('Enter the second integer: '));

function sumOddNumbersBetween(a, b) {
  let sum = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  
  for (let i = min + 1; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(`Sum of odd numbers between ${x} and ${y}: ${sumOddNumbersBetween(x, y)}`);