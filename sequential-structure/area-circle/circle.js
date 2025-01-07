function circle() { 
    let radius = parseFloat(prompt("What is the radius of the circle?"));
  
    let area = 3.14159 * (radius * radius);
  
    console.log(`If the circle has a radius of ${radius}, its area is: ${area.toFixed(3)}.`);
  }
  
  circle();
  