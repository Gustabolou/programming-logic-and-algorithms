function division() {
    
    let n = parseInt(prompt("How many numbers will you enter? ")); 
    let result = 0;
  
    for (let i = 0; i < n; i++) {
      let a = parseInt(prompt("Enter the numerator: ")); 
      let b = parseInt(prompt("Enter the denominator: "));
      
      if (b === 0) {
        console.log("IMPOSSIBLE DIVISION");
        
      } else {
        result = a / b;
        console.log(`The division of ${a} by ${b} is: ${result.toFixed(2)}`);
      }
    }
  }
  
  division();
  