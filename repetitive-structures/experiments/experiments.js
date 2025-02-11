function experiments() {
    let f = 0;  
    let r = 0;  
    let c = 0;  
    let totalSum = 0;  
    let totalRabbits = 0;  
    let totalRats = 0;  
    let totalFrogs = 0; 
  
    let n = parseInt(prompt("How many numbers will you enter? ")); 
  
    for (let i = 1; i <= n; i++) {
      let quantity = parseInt(prompt("Number of test subjects: ")); 
      let type = prompt("Type of test subject: ");
      
      if (type === "f") {
        f += quantity;
        totalFrogs += quantity; 
      } else if (type === "r") {
        r += quantity;
        totalRats += quantity;  
      } else if (type === "c") {
        c += quantity;
        totalRabbits += quantity;  
      }
      
      totalSum += quantity; 
    }
  
    let percentage1 = (totalRabbits / totalSum) * 100; 
    let percentage2 = (totalRats / totalSum) * 100; 
    let percentage3 = (totalFrogs / totalSum) * 100; 
  
    console.log(`FINAL REPORT:`);
    console.log(`Total: ${totalSum}`);
    console.log(`Total rabbits: ${totalRabbits}`);
    console.log(`Total rats: ${totalRats}`);
    console.log(`Total frogs: ${totalFrogs}`);
    console.log(`Percentage of rabbits: ${percentage1.toFixed(2)}%`); 
    console.log(`Percentage of rats: ${percentage2.toFixed(2)}%`);
    console.log(`Percentage of frogs: ${percentage3.toFixed(2)}%`);
  }
  
  experiments();
  