ConvolverNodefunction verifiedChange() {
    let productPrice = parseFloat(prompt("Unit price of the product: "));
    let quantity = parseInt(prompt("Quantity purchased: "));
    let payment = parseFloat(prompt("Payment amount: "));
  
    let change = payment - (productPrice * quantity);
  
    if (change > 0) {
      console.log(`You want ${quantity} products and paid ${payment.toFixed(2)}. Your change is: $${change.toFixed(2)}`);
    } else {
      let amountDue = (quantity * productPrice) - payment;
      console.log(`This amount is not enough. You still owe $${amountDue.toFixed(2)}!`);
    }
  }
  
  verifiedChange();
  