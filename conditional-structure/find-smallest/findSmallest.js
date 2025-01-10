function findSmallest() {
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    let num3 = parseInt(prompt("Enter the third number:"));

    let smallest = num1;

    if (num2 < smallest) {
        smallest = num2;
    }

    if (num3 < smallest) {
        smallest = num3;
    }
    console.log("Smallest:", smallest);
}

findSmallest();
