var p = "Please confirm your application"
var c = "Congratulations, your application has been sent! Enjoy"
var t = "Please try again"
var t = "Do you want to reset form?"
var m = "Thank you, enjoy our site."




function funkcija1() {
    alert(p);
    alert(c);
if (c) {
    document.getElementById("jsbutton").innerHTML = m;
} else {
    alert(t); 
}
}
function funkcija2 (){
    alert(t);
}