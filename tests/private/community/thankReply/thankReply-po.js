function landOnDiscussionDetailsPage() {
    // Dolazak na stranu diskusije
    browser.get('https://qa.cbancnetwork.com/community/discussions/view/3907eb4c-157c-4b72-8a52-939157297dea?filter=home'); 
    browser.sleep(2000);
}

function clickOnThank() {
    //  Klikni na Thank dugme
    element.all(by.cssContainingText('span.text_link', 'Thanks')).get(1).click();
    browser.sleep(500);
}

function checkThankCount1() {
    // Provera da li se Thank count povecao za 1
    var xxx = element.all(by.className('thanks_count')).get(1);
    expect(xxx.getText()).toEqual('1');
    browser.sleep(500);
 } 

 function checkSnackbar1(){
    // Provera Snek Bara
    var foo = element(by.className('snackbar sb_message'));
    expect(foo.getText()).toEqual('Reply was thanked. Nice!');
    browser.sleep(500);
 }

 function clickOnThanked() {
    //  Klikni na Thanked dugme
    element(by.cssContainingText('span.text_link', 'Thanked')).click();
    browser.sleep(500);
}

function checkThankCount2() {
    // Provera da li se Thank count smanjio za 1
    var xxx = element.all(by.className('thanks_count')).get(1);
    expect(xxx.getText()).toEqual('0');
    browser.sleep(500);
 } 

 function checkSnackbar2(){
    // Provera Snek Bara
    var foo = element(by.className('snackbar sb_message'));
    expect(foo.getText()).toEqual('Thanks was removed.');
    browser.sleep(500);
 }

 module.exports = {
    landOnDiscussionDetailsPage, 
    clickOnThank,
    checkThankCount1,
    checkSnackbar1,
    clickOnThanked,
    checkThankCount2,
    checkSnackbar2,
 }