function operator() {

    let planCost = 50.00;
    const planMinutes = 100;
    const excessCost = 2.00;

    let minutesUsed = parseInt(prompt("Enter the number of minutes: "));

    let totalCost = planCost;

    if (minutesUsed > planMinutes) {
        const excessMinutes = minutesUsed - planMinutes;
        totalCost = (excessMinutes * excessCost) + planCost;
    }

    console.log(`You will pay: $${totalCost.toFixed(2)}!`);
}

operator();
