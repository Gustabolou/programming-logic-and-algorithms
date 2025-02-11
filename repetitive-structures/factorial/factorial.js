function factorial() {
    
    let n = parseInt(prompt("How many numbers will you enter? ")); 
    let result = 1;  
  
    for (let i = 1; i <= n; i++) {
      result *= i;  
    }
  
    console.log(`FACTORIAL = ${result}`);
  } 
  
  factorial();
  