function glucose() {
    let glucoseLevel = parseFloat(prompt("Enter the glucose measurement: "));
    
    if (glucoseLevel <= 100.0) {
      console.log("Classification: Normal glucose!");
      
    } else if (glucoseLevel <= 140.0) {
      console.log("Classification: Elevated glucose!");
      
    } else {
      console.log("Classification: Diabetes!");
    }
  }
  
  glucose();
  