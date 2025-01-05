function change() {
    let product = parseFloat(prompt("What is the product price: "));
    let quantity = parseInt(prompt("Required quantity: "));
    let payment = parseFloat(prompt("Payment amount: "));
  
    let change = payment - (product * quantity);
  
    if (change > 0) {
      console.log(`You want ${quantity} of the product and paid ${payment.toFixed(2)}. Your change is: ${change.toFixed(1)}.`);
    } else {
      console.log(`You are in debt, you still need to pay: ${Math.abs(change.toFixed(1))}.`);
    }
  }
  
  change();
  