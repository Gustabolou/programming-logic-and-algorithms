function averageConsumption() {
    let distance = parseFloat(prompt("What is the distance traveled by the car?"));
    let fuel = parseFloat(prompt("How much fuel did the car consume?"));
  
    let consumption = distance / fuel;
  
    console.log(`The car traveled ${distance} km and used ${fuel} liters of fuel. Its average fuel consumption is: ${consumption.toFixed(3)} km/l.`);
  }
  
  averageConsumption();