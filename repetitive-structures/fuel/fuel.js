function fuel() {
    let alcohol = 0;
    let gasoline = 0;
    let diesel = 0;
  
    while (true) {
      let type = parseInt(prompt("Enter a code (1: Alcohol, 2: Gasoline, 3: Diesel, 4: End): "));
      
      if (isNaN(type) || type < 1 || type > 4) {
        console.log("Invalid code! Please enter a value between 1 and 4.");
        continue;
      }
  
      if (type === 1) {
        alcohol += 1;
      } else if (type === 2) {
        gasoline += 1;
      } else if (type === 3) {
        diesel += 1;
      } else if (type === 4) {
        console.log("Thank you! Program terminated.");
        break;
      }
    }
  
    console.log(`Alcohol: ${alcohol}`);
    console.log(`Gasoline: ${gasoline}`);
    console.log(`Diesel: ${diesel}`);
  }
  
  fuel();
  