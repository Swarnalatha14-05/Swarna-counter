let button = document.getElementById("counterButton")
let counterDisplay = document.getElementById("counter")

let count=0;
button.addEventListener("click" , () => {
     count++;
     counterDisplay.textContent=count;
})
  