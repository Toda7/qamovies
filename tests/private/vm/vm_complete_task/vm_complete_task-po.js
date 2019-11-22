
    function clickOnMarkCompletebutton() {
        element(by.buttonText('MARK COMPLETE')).click();
        browser.sleep(2000);
    }

    function checkReOpenButton(){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.textToBePresentInElement($('.btn-flat'), 'RE-OPEN'), 5000);
      }   


    module.exports = {
        clickOnMarkCompletebutton,
        checkReOpenButton,
    }