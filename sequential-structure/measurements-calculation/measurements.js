function measurements() {
    let measureA = parseFloat(prompt("What is measurement A?"));
    let measureB = parseFloat(prompt("What is measurement B?"));
    let measureC = parseFloat(prompt("What is measurement C?"));
  
    let squareArea = measureA * measureA;
    let triangleArea = (measureA * measureB) / 2;
    let trapezoidArea = ((measureA + measureB) * measureC) / 2;
  
    console.log(`The area of the square is: ${squareArea.toFixed(4)}`);
    console.log(`The area of the triangle is: ${triangleArea.toFixed(4)}`);
    console.log(`The area of the trapezoid is: ${trapezoidArea.toFixed(4)}`);
  }
  
  measurements();
  