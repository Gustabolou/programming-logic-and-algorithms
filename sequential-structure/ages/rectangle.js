function ages() {
    let name1 = prompt("Enter the name of the first person: ");
    let age1 = parseFloat(prompt("Enter the age of the first person: "));
    let name2 = prompt("Enter the name of the second person: ");
    let age2 = parseFloat(prompt("Enter the age of the second person: "));
  
    let average = (age1 + age2) / 2;
  
    console.log(`The average age of ${name1} and ${name2} is: ${average.toFixed(4)}`);
  }
  
  // Call the function
  ages();
  
