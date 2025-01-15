function gameDuration() {
    let start = parseInt(prompt("Start time (0-23): "));
    let end = parseInt(prompt("End time (0-23): "));
  
    let duration;
  
    if (start < end) {
      duration = end - start;
    } else {
      duration = 24 - start + end;
    }
  
    console.log(`Game duration: ${duration} hour(s)`);
  }
  
  gameDuration();
  