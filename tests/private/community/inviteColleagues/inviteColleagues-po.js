 function clickOnInviteColleagues() {
    //  Klik na Invite Colleagues dugme
    element(by.cssContainingText('i.material-icons', 'person_add')).click(); 
    browser.sleep(1000);
 }

 function enterEmailAddress() {
   // Unos email adrese
   element(by.css('.input-field input[type=email]')).sendKeys('atqa@mail.com');
   browser.sleep(1000);
}

function clickOnSendButton() {
   //  Klik na Send dugme
   element(by.className('btn-flat right')).click(); 
   browser.sleep(1000);
}

function checkSuccess(){
   // Provera da li je uspesno pozvan kolega
   var foo = element(by.className('snackbar sb_message'));
   expect(foo.getText()).toEqual('Invite sent.');
   browser.sleep(2000);
}  


 module.exports = {
   clickOnInviteColleagues,
   enterEmailAddress,
   clickOnSendButton,
   checkSuccess,
 }