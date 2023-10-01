// Function to generate a random number
function generateRandomNumber() {
    const min = 1;
    const max = 100; // You can change the range of random numbers as needed
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to display progress
  function displayProgress(remainingTime) {
    console.log(`Time remaining: ${remainingTime} seconds...`);
  }
  
  // Initial delay in seconds (you can modify this value)
  let delayInSeconds = 3;
  
  console.log(`Generating a random number after ${delayInSeconds} seconds...`);
  
  // Function to start the countdown
  function startCountdown() {
    const interval = setInterval(() => {
      if (delayInSeconds > 0) {
        displayProgress(delayInSeconds);
        delayInSeconds--;
      } else {
        clearInterval(interval); // Stop the progress indications
        const randomNumber = generateRandomNumber();
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000); // 1000 milliseconds = 1 second
  }
  
  startCountdown();
  