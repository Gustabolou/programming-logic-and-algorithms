let N = parseInt(prompt("How many numbers will you enter?"));

for (let i = 0; i < N; i++) {
    let X = parseInt(prompt("Enter a number:"));

    if (X === 0) {
        console.log("NULL");
    } else {
        let parity = (X % 2 === 0) ? "EVEN" : "ODD";
        let sign = (X > 0) ? "POSITIVE" : "NEGATIVE";
        console.log(`${parity} ${sign}`);
    }
}
