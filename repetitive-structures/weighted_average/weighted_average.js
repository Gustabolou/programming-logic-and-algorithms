function weighted_average() {
    
    let n = parseInt(prompt("How many numbers will you enter? ")); 
  
    for (let i = 0; i < n; i++) {
         let a = parseFloat(prompt("Enter the first number: "));
         let b = parseFloat(prompt("Enter the second number: "));
         let c = parseFloat(prompt("Enter the third number: "));
         let average = (a * 2 + b * 3 + c * 5) / 10;
         console.log(`The average is: ${average.toFixed(1)}`);
    } 
  
  } 
  
  weighted_average();
  