function fixedPassword() {
    let password = parseFloat(prompt("Enter the password: "));
    
    while (true) {
      if (password !== 2002) {
        password = parseFloat(prompt("Invalid password! Try again: "));
      } else {
        console.log("Access granted!");
        break;
      }
    }
  }
  
  fixedPassword();
  