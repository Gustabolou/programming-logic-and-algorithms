function payment() {
    let name = prompt("What is your name? ");
    let hourlyWage = parseFloat(prompt("What is your hourly wage? "));
    let hoursWorked = parseFloat(prompt("How many hours did you work? "));
  
    let salary = hourlyWage * hoursWorked;
  
    console.log(`The employee ${name} worked ${hoursWorked} hours, and their payment is: ${salary.toFixed(2)}`);
  }
  
  payment();
  