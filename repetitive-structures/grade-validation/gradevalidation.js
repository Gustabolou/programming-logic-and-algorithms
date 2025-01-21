function gradeValidation() {
    let grade1, grade2;
  
    while (true) {
      grade1 = parseFloat(prompt("Enter the first grade (0 to 10): "));
      if (grade1 >= 0 && grade1 <= 10) {
        break;
      } else {
        console.log("Invalid grade! Please try again.");
      }
    }
  
    while (true) {
      grade2 = parseFloat(prompt("Enter the second grade (0 to 10): "));
      if (grade2 >= 0 && grade2 <= 10) {
        break;
      } else {
        console.log("Invalid grade! Please try again.");
      }
    }
  
    const average = (grade1 + grade2) / 2;
    console.log(`Semester average: ${average.toFixed(2)}`);
  }
  
  gradeValidation();
  