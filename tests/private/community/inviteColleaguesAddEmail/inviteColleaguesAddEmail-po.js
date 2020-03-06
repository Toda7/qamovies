function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com/community/home'); 
    browser.sleep(2000);
}

function clickOnAddEmailButton() {
    //  Klik Add Email Button
    element(by.className('active add_link')).click(); 
    browser.sleep(2000);
 }

 function enterEmailAddress2() {
    // Unos email adrese
    element.all(by.css('.input-field input[type=email]')).get(3).sendKeys('atqa2@mail.com'); 
    browser.sleep(1000);
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