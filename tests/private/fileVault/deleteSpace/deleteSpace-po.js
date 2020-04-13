function clickOnProtractorSpace() {
    // Click na Protractor space
    element(by.partialLinkText('Protractor')).click();
    browser.sleep(5000);
}

function clickOnTrashCan() {
    // Click na Trash Can
    element(by.className('page_menu', 'Delete Space')).click();
    browser.sleep(5000);
}

function clickToConfirmDeleting() {
    // Click na YES da potvrdis brisanje spacea
    element(by.className('btn-flat right', 'Yes')).click();
    browser.sleep(5000);
}

function checkIsSpaceDeleted(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Space obrisan
    browser.wait(EC.textToBePresentInElement($('div.col.center'), 'The space "Protractor" has been deleted.'), 7000);
}

module.exports = {
    clickOnProtractorSpace,
    clickOnTrashCan,
    clickToConfirmDeleting,
    checkIsSpaceDeleted,

}