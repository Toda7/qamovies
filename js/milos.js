// ovako mozemo da stavimo vise varijabli u jednu varijablu - i uz pomoc -> message.m cemo da pozovemo odredjenu varijablu u funkciju
// var messages = {p:"Please confirm your application", c:"Congratulations, your application has been sent! Enjoy"}

var p = "Please confirm your application"
var c = "Congratulations, your application has been sent! Enjoy"
var a = "Please try again"
var t = "Do you want to reset form?"
var m = "Thank you, enjoy our site."
var d ="Your form is restarted."

// ovo je scripta za SUBMIT button u formi
function funkcija1() {
    alert(p);
    alert(c);
if (c) {
    document.getElementById("jsbutton").innerHTML = m;
} else {
    alert(a); 
}
}
// ovo je funkcija za RESET button u formi
function funkcija2 (){
    alert(t);
if (t);
    document.getElementById("jsbutton").innerHTML = d;
}
console.log("Milos tested nodejs on this page.");