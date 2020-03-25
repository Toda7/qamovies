function clickOnCreateHostedWebinarButton() {
    //  Klik on create outsourced webinar button
    element(by.partialLinkText('CREATE OUTSOURCED WEBINAR')).click();
    browser.sleep(2000);
 }
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('#admin_webinars_create_os'), 'Create Outsourced Webinar'), 7000);
}   
function enterTextInTitleField() {
    // Unosenje texta u title field
    element(by.name('title')).sendKeys('New outsourced webinar');
}
function enterTextInWatchInfoField() {
    // Unosenje texta u description field
    element(by.name('watch_info')).sendKeys('Habemus deserunt democritum sed cu...');
}


 module.exports = {
    clickOnCreateHostedWebinarButton,
    checkTitleOnPage,
    enterTextInTitleField,
    enterTextInWatchInfoField,
 }