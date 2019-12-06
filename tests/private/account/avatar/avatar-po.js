function clickOnAvatarTab() {
    element(by.partialLinkText('AVATAR')).click();
    // klik na Avatar tab
    browser.sleep(2000);
}

function addProfilePhoto() {
    // Upload myphoto to profile picture
    var path = require('path');
    var fileToUpload = './QA.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    browser.sleep(3000);
 }

 function checkSuccessMessageForPhoto(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je save-ovano
    browser.wait(EC.textToBePresentInElement($('.message.success'), 'Avatar successfully updated.'), 5000);
}

module.exports = {   
    clickOnAvatarTab,
    addProfilePhoto,
    checkSuccessMessageForPhoto,

}