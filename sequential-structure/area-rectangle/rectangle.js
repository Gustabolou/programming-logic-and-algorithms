function rectangle() {
    const base = parseFloat(prompt("Rectangle base: "));
    const height = parseFloat(prompt("Rectangle height: "));
  
    const area = base * height;
    const perimeter = 2 * (base + height) ;
    const diagonal = Math.sqrt(base ** 2 + height ** 2);
    
    console.log(`AREA = ${area.toFixed(4)}`);
    console.log(`PERIMETER = ${perimeter.toFixed(4)}`);
    console.log(`DIAGONAL = ${diagonal.toFixed(4)}`);
}

rectangle();
