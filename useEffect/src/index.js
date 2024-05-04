async function Weather() {
    console.log("Welcome to control room");
    console.log("Fetching Karachi weather");
  
    // Create a promise for Karachi weather (resolves after 1 second)
    const karachiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("37 Deg");
      }, 2000);
    });
  
    // Wait for Karachi weather to resolve (1 second delay)
    let kar = await karachiWeather;
    console.log(kar); // Output: "37 Deg"
  
    console.log("Fetching Isb weather");
  
    // Create a promise for Islamabad weather (resolves after 4 seconds)
    const isbWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("30 Deg");
      }, 4000);
    });
  
    // Wait for Islamabad weather to resolve after Karachi (4 second delay)
    let isb = await isbWeather;
    console.log(isb); // Output: "30 Deg" (after a total of 5 seconds)
  }
  
  Weather();
  