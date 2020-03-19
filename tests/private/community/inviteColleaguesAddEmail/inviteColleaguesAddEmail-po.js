function landOnHomePage() {
   // dolazak na home page
    browser.get('https://qa.cbancnetwork.com/community/home'); 
    browser.sleep(2000);
}

function clickOnAddEmailButton() {
    //  Klik Add Email Button
    element(by.className('active add_link')).click(); 
    browser.sleep(2000);
 }

 getRandomEmail = function () {
    // dobijamo random email 
   var strValues = "abcdefghijk123456789";
   var strEmail = "";
   for (var i = 0; i < strValues.length; i++) {
       strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
   }
   return strEmail + "@boston.com" 
};

function enterEmailAddress2() {
   // unos random emaila u polje
   element.all(by.css('.input-field input[type=email]')).get(3).sendKeys(getRandomEmail(5));
}

 function checkSuccess(){
    // Provera da li je uspesno pozvan kolega
    var foo = element(by.className('snackbar sb_message'));
    expect(foo.getText()).toEqual('Invites sent.');
    browser.sleep(2000);
 }  


 module.exports = {
    landOnHomePage,
    clickOnAddEmailButton,
    enterEmailAddress2,
    checkSuccess,

 }