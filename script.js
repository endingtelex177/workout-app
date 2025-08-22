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
//update token test 2
// A button from 1 through 10 
for (let i = 1;i <= 10; i++ ) {
    const createButton = document.createElement("button");
    createButton.innerText = `+${i}`;
    createButton.id = `plus${i}`;
    document.body.appendChild(createButton);

    createButton.onclick = () => {
        totalVal.push(i);
        let total = totalVal.reduce((a,b)=> {
            return a + b;
        },0)
        document.getElementById("display").innerText = total;
    };
}

requestWakeLock();

