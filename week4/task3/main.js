let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let button = document.getElementById("register");

button.addEventListener("click", function(){
    if(password1.value.length <=10){alert("Password length is less than 10.");}
    else{if (password1.value === password2.value) {alert("The passwords are same.");} else {alert("The passwords are not same.")}}
})

fname.addEventListener("keyup", function(){document.getElementById("user").textContent = ("@"+fname.value+lname.value).toLocaleLowerCase()});
lname.addEventListener("keyup", function(){document.getElementById("user").textContent = ("@"+fname.value+lname.value).toLocaleLowerCase()});


