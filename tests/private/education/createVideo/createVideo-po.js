function clickOnVideoLink() {
    //  Klik on webinars link
    element(by.partialLinkText('VIDEO')).click();
    browser.sleep(2000);
 }
function clickOnCreateVideoButton() {
    //  Klik on create hosted webinar button
    element(by.partialLinkText('CREATE VIDEO')).click();
    browser.sleep(2000);
 }

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('#admin_videos_create'), 'Create Video'), 5000);
} 

function enterTextInTitleField() {
    // Unosenje texta u title field
    element(by.name('title')).sendKeys('New video');
}

function enterDateField() {
    // Setovaje start date
    element(by.name('date')).sendKeys('2020-02-021T03:00:00');
    browser.sleep(2000);
}

function enterDateField2() {
    // Setovaje start date
    element(by.name('date')).sendKeys('2020-02-02T03:00:00');
    browser.sleep(2000);
}

function enterVideoUrlInVideoField() {
    // Unosenje linka u here field'
    element(by.name('video_url')).sendKeys('https://static.cbancnetwork.com/Public/education/replays/qa-test-videos/file-vault.mp4');
}

function clickOnVideoButton() {
    // Klik on save webinar button
    element(by.buttonText('Save Video')).click();
    browser.sleep(3000);
}

 module.exports = {
    clickOnVideoLink,
    clickOnCreateVideoButton,
    checkTitleOnPage,
    enterTextInTitleField,
    enterDateField,
    enterDateField2,
    enterVideoUrlInVideoField,
    clickOnVideoButton,
 }