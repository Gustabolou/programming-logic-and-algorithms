function grades() {

    let gradeOne = parseFloat(prompt("Enter the first grade: "));
    let gradeTwo = parseFloat(prompt("Enter the second grade: "));
    
    let average = (gradeOne + gradeTwo) / 2;
    
    let result;
    if (average < 60) {
        result = "Failed, unfortunately.";
    } else {
        result = "Passed, great job!";
    }
    
    console.log(`In semesters 1 and 2, you scored ${grade1} and ${grade2}.`);
    console.log(`Your final average is ${average}.`);
    console.log(`You have ${result}!`);
}

grades();
