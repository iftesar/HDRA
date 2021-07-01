let inputs;
// display Results
const myValue = (value, val) => {
  if(value) {
    document.querySelector(".form-container").style.display = "none";
    inputs = JSON.parse(val)

    // Show Loading
    document.getElementById("loading").style.display = "block";
  
    setTimeout(display, 2000);
  }
}


function display() {
  document.getElementById("loading").style.display = "none";
  document.querySelector(".form-container").style.display = "block";
  document.getElementById("results").style.display = "block";
  document.querySelector(".submit").style.display = "none";
  document.querySelector(".title").innerHTML = "Results";
  document.querySelector(".subtitle").style.display = "none";
  document.querySelector(".reset").style.display = "block";
  document.querySelector(".form-container").style.height = "675px";

  const inputFields = document.querySelectorAll('.input');

  for(let i = 0 ; i < inputFields.length; i++) {
    inputFields[i].value = inputs[i]
    inputFields[i].readOnly = true;
  }
}


document.querySelector(".reset").addEventListener("click", function (e) {
  document.location.href = '/'
});