function javelinThrow() {
    let attempt1 = parseFloat(prompt("Enter the first attempt: "));
    let attempt2 = parseFloat(prompt("Enter the second attempt: "));
    let attempt3 = parseFloat(prompt("Enter the third attempt: "));
  
    if ((attempt1 > attempt2) && (attempt1 > attempt3)) {
      console.log(`Attempt 1 with a value of ${attempt1} was the longest!`);
      
    } else if ((attempt2 > attempt1) && (attempt2 > attempt3)) {
      console.log(`Attempt 2 with a value of ${attempt2} was the longest!`);
      
    } else {
      console.log(`The longest distance was: ${attempt3}`);
    }
  }
  
  javelinThrow();
  