let N = parseInt(prompt("How many numbers will you enter?"));
let inside = 0, outside = 0;

for (let i = 0; i < N; i++) {
    let X = parseInt(prompt("Enter a number:"));
    if (X >= 10 && X <= 20) {
        inside++;
    } else {
        outside++;
    }
}

console.log(`${inside} in`);
console.log(`${outside} out`);
