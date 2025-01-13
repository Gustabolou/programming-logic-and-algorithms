function temperatureMeasurement() {  
    let scale = prompt("Which scale will you enter the temperature in (C/F)?").toUpperCase();
  
    if (scale === 'C') {
      let celsiusTemperature = parseFloat(prompt("Enter the temperature in Celsius:"));
      let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
      console.log(`Equivalent temperature in Fahrenheit: ${fahrenheitTemperature.toFixed(2)}`);
  
    } else if (scale === 'F') {
      let fahrenheitTemperature = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
      let celsiusTemperature = (5 / 9) * (fahrenheitTemperature - 32);
      console.log(`Equivalent temperature in Celsius: ${celsiusTemperature.toFixed(2)}`);
      
    } else {
      console.log("Invalid scale! Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    }
  }
  
  temperatureMeasurement();
  