function bhaskara() {
   
    let a = parseFloat(prompt("Enter the value of a: "));
    let b = parseFloat(prompt("Enter the value of b: "));
    let c = parseFloat(prompt("Enter the value of c: "));
    
    const delta = b ** 2 - 4 * a * c;

    if ((delta < 0) || (a === 0)) {
        console.log(`There are no real roots.`);
    } else {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
    
        console.log(`The roots are ${root1.toFixed(4)} and ${root2.toFixed(4)}!`);
    }
}

bhaskara();

