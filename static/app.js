// Listen for Submit
document.getElementById('submit').addEventListener('submit', function(e){
 // Hide Results
 //document.getElementById('results').style.display = 'none'
 document.getElementById('submit').style.display = "none"

 // Show Loading
 document.getElementById('loading').style.display = 'block'

 setTimeout(display, 2000)
 e.preventDefault();
})

// display Results
function display() {
 document.getElementById('loading').style.display = 'none'
 document.getElementById('submit').style.display = "block"
 //document.getElementById('results').style.display = 'block'
 //var node = document.createElement("p");                 
 //var textnode = document.createTextNode({{ prediction_text }});         
 //node.appendChild(textnode);                              
 //document.getElementById("results").appendChild(node);     
 document.querySelector(".input").readOnly = true
 document.querySelector('.submit').style.display = 'none'
 document.querySelector('.title').innerHTML = 'Results'
 document.querySelector('.subtitle').style.display = 'none'
 document.querySelector('.reset').style.display = 'block'
 document.querySelector('.form').style.height = '665px'
}


document.getElementById('submit').addEventListener('reset', function(e){
 window.location.reload();
})
