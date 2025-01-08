const durationInSeconds = parseInt(prompt("Enter the duration in seconds: "));

function convertDuration(totalSeconds) {

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes}:${seconds}`;
}

const formattedDuration = convertDuration(durationInSeconds);

console.log("Formatted duration:", formattedDuration);
