let isComputerOn = false;
console.log("Turning on your computer...");

function turnOnComputer(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message) {
        console.log(`Your computer says: ${message}`);
        if (message === "Power On!") {
          return resolve(true);
        } else {
          return resolve(false);
        }
      }
      return reject("No Message Received");
    }, 2000);
  });
}

turnOnComputer()
  .then((resp) => {
    console.log(resp);
    isComputerOn = resp;
    if (isComputerOn) {
      console.log("Your computer is on!");
    } else {
      console.log("Something went wrong!");
    }
  }).catch((error) => {
    console.log(error);
  });
