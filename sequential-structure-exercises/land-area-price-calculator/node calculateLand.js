function calculateLand() {
    let width = parseFloat(prompt("Enter the width of the land: "));
    let length = parseFloat(prompt("Enter the length of the land: "));
    let pricePerSquareMeter = parseFloat(prompt("Enter the price per square meter of the land: "));
  
    let area = width * length;
    let price = area * pricePerSquareMeter;
  
    console.log(`The area of the land is: ${area.toFixed(2)} square meters`);
    console.log(`The price of the land is: $${price.toFixed(2)}`);
  }
  
  calculateLand();
  
  
