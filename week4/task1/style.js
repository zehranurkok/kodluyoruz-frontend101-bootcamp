var isim = prompt("İsim:");
var resit = 18;
var evlilik = prompt("Evlilik yasi:");
var yas = 35;

for (var i = 0; i <= yas; i++) {
    if (i==0) console.log(isim+" resit oldu.");        
    else if (i == evlilik) console.log(isim+" evlendi.");  
    else if (i == resit) console.log(isim+" dogdu.");  
    else console.log(isim+i+" yasinda.");
}