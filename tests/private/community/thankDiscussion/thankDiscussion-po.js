function clickOnThank() {
    //  Klikni na Thank dugme
    element(by.cssContainingText('span.text_link', 'Thanks')).click();
}

function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je diskusija uspesno thankovana
    browser.wait(EC.textToBePresentInElement($('.thanks_count '), '1'), 7000);

    browser.sleep(2000);
 }  

 module.exports = {
    clickOnThank,
    checkSuccess,
 }