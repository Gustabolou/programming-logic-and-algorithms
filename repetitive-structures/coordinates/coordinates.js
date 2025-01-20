function coordinates() {
    let x = parseFloat(prompt("Value of X: "));
    let y = parseFloat(prompt("Value of Y: "));
  
    let coordinate;
  
    if (x > 0 && y > 0) {
      coordinate = "Q1";
    } else if (x > 0 && y < 0) {
      coordinate = "Q4";
    } else if (x < 0 && y < 0) {
      coordinate = "Q3";
    } else if (x === 0 && y === 0) {
      coordinate = "Origin";
    } else if (x === 0) {
      coordinate = "X Axis";
    } else if (y === 0) {
      coordinate = "Y Axis";
    } else {
      coordinate = "Q2";
    }
  
    console.log(`Coordinate: ${coordinate}`);
  }
  
  coordinates();
  