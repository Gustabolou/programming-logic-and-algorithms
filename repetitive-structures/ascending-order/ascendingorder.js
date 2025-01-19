function ascendingOrder() {

    let x = parseInt(prompt("Enter a number:"));
    let y = parseInt(prompt("Enter another number:"));
    let sum = 0;
  
    while (x !== y) {
      sum += (x + y);
  
      if (x < y) {
        console.log("X and Y were entered in ASCENDING order!");
      } else {
        console.log("X and Y were entered in DESCENDING order!");
      }
  
      x = parseInt(prompt("Enter another number:"));
      y = parseInt(prompt("Enter another number:"));
    }
  
    console.log("The program has ended because two equal values were entered!");
    console.log(`The total sum of these values is: ${sum}`);
  }
  
  ascendingOrder();
  