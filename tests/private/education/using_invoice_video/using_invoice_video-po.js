function clickOnAgreePayButton() {
    //  Klik on Agree & Pay button
    element(by.buttonText('Agree & Pay')).click();
    browser.sleep(2000);
}   
module.exports = {
    clickOnAgreePayButton,
}