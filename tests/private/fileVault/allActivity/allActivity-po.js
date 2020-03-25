function clickOnAllActivity() {
    // Click na All Activity
    element(by.partialLinkText('All Activity')).click();
    browser.sleep(5000);
}

function checkAllActivityList() {
    // Provera All Activity liste
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.text_content'), 'Chicago Alberto Diaz FI'), 7000);
}

module.exports = {
    clickOnAllActivity,
    checkAllActivityList,
   
   }