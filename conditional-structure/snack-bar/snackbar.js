function snackBar() {
    let productCode = parseInt(prompt("Enter the product code: "));
    let quantity = parseInt(prompt("Enter the quantity purchased: "));
    
    let price;
  
    switch (productCode) {
      case 1:
        price = 5.00;
        break;
      case 2:
        price = 3.50;
        break;
      case 3:
        price = 4.80;
        break;
      case 4:
        price = 8.90;
        break;
      case 5:
        price = 7.32;
        break;
      default:
        console.log("Invalid code!");
        break;
    }
  
    if (price !== undefined) {
      let totalAmount = price * quantity;
      console.log(`The total price is $${totalAmount.toFixed(2)}`);
    }
  }
  
  snackBar();
  