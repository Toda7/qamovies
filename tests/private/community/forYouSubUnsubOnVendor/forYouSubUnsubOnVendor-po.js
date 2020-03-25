function landOnVendorPage() {
    // Dolazak na Vendor page
    browser.get('https://qa.cbancnetwork.com/community/vendors/view/e34579c7-19c2-418e-85c0-dbd832043746'); 
}

function clickOnFollow() {
    //  Klik na Follow dugme
    element(by.className('follow btn')).click();
}

function isDiscThere(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se Diskusija pojavila
    browser.wait(EC.textToBePresentInElement($('.title'), 'For You -> Subscribe Vendor and Vendor user testing'), 7000);
    browser.sleep(2000);
}

function clickOnUnfollow() {
    //  Klik na Unfollow dugme
    element(by.className('unfollow btn btn-flat ')).click();
}

module.exports = {
    landOnVendorPage,
    clickOnFollow,
    isDiscThere,
    clickOnUnfollow,
}