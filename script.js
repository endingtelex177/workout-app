let totalVal = [];
let wakeLock = null;

// Try to request wake lock
async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    console.log("Wake Lock is active");
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}
// a container for the button 
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
document.body.appendChild(buttonContainer);
//create 10 button, and put id on each of them, click of a button will return a value with the designated number
for (let i = 1;i <= 10; i++ ) {
    const createButton = document.createElement("button");
    createButton.innerText = `+${i}`;
    createButton.id = `plus${i}`;
    buttonContainer.appendChild(createButton);

    createButton.onclick = () => {
        totalVal.push(i);
        let total = totalVal.reduce((a,b)=> {
            return a + b;
        },0)
        document.getElementById("display").innerText = total;
    };
}

// reset button to 0 
const resetButton = document.createElement("button");
document.body.appendChild(resetButton);
resetButton.innerText = "RESET";
resetButton.onclick = () => {
    totalVal = [];
    document.getElementById("display").innerText = 0;
}

requestWakeLock();

