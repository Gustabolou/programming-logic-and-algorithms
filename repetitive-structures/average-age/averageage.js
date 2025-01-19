function averageAge() {
    let sum = 0;
    let count = 0;
  
    while (true) {
      let age = parseInt(prompt("Enter an age:"));
  
      if (age < 0) {
        if (count === 0) {
          console.log("IMPOSSIBLE TO CALCULATE");
        } else {
          let average = (sum / count).toFixed(2);
          console.log(`AVERAGE = ${average}`);
        }
        break;
      }
  
      sum += age;
      count++;
    }
  }
  
  averageAge();
  