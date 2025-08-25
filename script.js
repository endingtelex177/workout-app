let totalVal = [];
if (localStorage.getItem("total") !== null){
   totalVal = [Number(localStorage.getItem("total"))] 
}
let wakeLock = null;
// get the localStorage value and display on screen
let totalDisplay = localStorage.getItem("total");
if (totalDisplay === null) {
  document.getElementById("display").innerText = 0;
} else {
  document.getElementById("display").innerText = totalDisplay;
}
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


const store = (x) => {
  totalVal.push(x);
  total = totalVal.reduce((a,b)=> {
      return a + b;
  },0)
  
  // set the total added value into a localStorage with a key "total"
  localStorage.setItem("total",total);
  totalDisplay = localStorage.getItem("total");
  document.getElementById("display").innerText = totalDisplay;
}
//create 10 button, and put id on each of them, click of a button will return a value with the designated number
for (let i = 1;i <= 10; i++ ) {
    const createButton = document.createElement("button");
    createButton.innerText = `+${i}`;
    createButton.id = `plus${i}`;
    buttonContainer.appendChild(createButton);

    let button = createButton.onclick = () => {
    store(i);
    };

    document.addEventListener("keydown", function(event){
      if (event.key === "0"){
        store(1);
      } else if (event.key === `${i}`){
        button();
      }
    })};


// reset button to 0 
const resetButton = document.createElement("button");
document.body.appendChild(resetButton);
resetButton.innerText = "RESET";
resetButton.onclick = () => {
    totalVal = [];
    document.getElementById("display").innerText = 0;
    localStorage.clear();
}

requestWakeLock();

