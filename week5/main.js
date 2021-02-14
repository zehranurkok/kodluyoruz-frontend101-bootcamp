let array = new Array()
let seatnumber = document.getElementById("seat");
let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let check = document.getElementById("check");
let clearbutton = document.getElementById("clear");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function check(){if (this.check.check) {seatnumber.value = randomInt(1,50);} else{alert("Please join!");}}

clearbutton.addEventListener("click", function(){fname = null; lname = null; email = null; tel = null; seatnumber = null; })

$("input").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
  });

