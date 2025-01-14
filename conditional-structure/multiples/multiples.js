function multiples() {
    let numberX = parseInt(prompt("Enter the value of x: "));
    let numberY = parseInt(prompt("Enter the value of y: "));
  
    if (numberX === 0 || numberY === 0) {
      console.log("Numbers cannot be 0.");
      return false;
    }
  
    if ((numberX % numberY === 0) || (numberY % numberX === 0)) { 
      console.log("They are multiples!");
    } else {
      console.log("They are not multiples!");
    }
  }
  
  multiples();
  