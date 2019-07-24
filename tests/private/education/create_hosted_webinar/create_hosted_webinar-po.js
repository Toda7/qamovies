function landOnEducationAdminPage() {
    // Dolazak na admin stranu
    browser.get('https://qa.cbancnetwork.com/education/admin'); 
    browser.sleep(2000);
}

function clickOnWebinarsLink() {
    //  Klik on webinars link
    element(by.partialLinkText('WEBINAR')).click();
    browser.sleep(2000);
 }

function clickOnCreateHostedWebinarButton() {
    //  Klik on create hosted webinar button
    element(by.partialLinkText('CREATE HOSTED WEBINAR')).click();
    browser.sleep(2000);
 }

 function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('#admin_webinars_create_gtw'), 'Create Hosted Webinar'), 5000);
}   

function enterTextInTitleField() {
    // Unosenje texta u title field
    element(by.name('title')).sendKeys('New hosted webinar');
}

function enterTextInSynopsisField() {
    // Unosenje texta u synopsis field
    element(by.name('synopsis')).sendKeys('Lorem ipsum dolor sit amet...');
}

function enterTextInDescriptionField() {
    // Unosenje texta u description field
    element(by.name('description')).sendKeys('Habemus deserunt democritum sed cu...');
}

function enterTextInHereField() {
    // Unosenje linka u here field'
    element(by.name('hero')).sendKeys('https://s3.amazonaws.com/cbanc/Public/education_assets/qa/Heromilos3.jpg');
}

function enterTextInTileField() {
    element(by.name('tile')).sendKeys('https://s3.amazonaws.com/cbanc/Public/education_assets/qa/tilemilos2.JPG');
}

function enterTextInPriceField() {
    // Unosenje text u price field
    element(by.name('price')).sendKeys('99');
}

function enterTextInStartDateField() {
    // Setovaje start date
    element(by.name('start_date')).sendKeys('2020-02-02T03:00:00');
    browser.sleep(2000);
}

function enterTextInStartDateField2() {
    // Setovaje start date
    element(by.name('start_date')).sendKeys('2020-02-02T03:00:00');
    browser.sleep(2000);
}

function enterTextInEndDateField() {
    // Setovaje end date
    element(by.name('end_date')).sendKeys('2020-02-02T01:00:00');
    browser.sleep(2000);
}

function enterTextInEndDateField2() {
    // Setovaje end date
    element(by.name('end_date')).sendKeys('2020-02-02T01:00:00');
    browser.sleep(2000);
}

function clickToAddSession() {
    // Klik on + ADD SESSION button
    element(by.className('add_session')).click();
    browser.sleep(2000);
 }

 function enterTextInPurchaseDetailsField() {
    // Unosenje texta u synopsis field
    element(by.name('purchase_details')).sendKeys('Lorem ipsum dolor sit amet...');
}

function clickOnSaveWebinarButton() {
    // Klik on save webinar button
    element(by.buttonText('Save Webinar')).click();
    browser.sleep(3000);
}

function addDoc() {
    // add paid doc
    var path = require('path');
    var fileToUpload = './myphoto.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    browser.sleep(3000);
 }

 function selectPaidForVisibility() {
    // Select paid option
    element(by.xpath('//*[@id="education_files_form"]/div[3]/div[1]/input')).click(); 
    browser.sleep(2000);
}

function clickOnUploadAttachButton() {
    // Klik on Upload & Attach button
    element(by.buttonText('Upload & Attach')).click();
    browser.sleep(3000);
}

function enterTextInPresentersField() {
    // Unosenje texta u presenter field
    element(by.name('presenter')).sendKeys('1@memphis.com');
}

function clickOnFindttachButton() {
    // Klik on Find & Attach button
    element(by.buttonText('Find & Attach')).click();
    browser.sleep(3000);
}

function selectTopicTags() {
    // select topic tag
    element(by.name('query')).sendKeys('Leadership');
    browser.sleep(2000);
    // element(by.name('query')).sendKeys('Leadership');
}

function clickOnTopicToSelect() {
    // Klik to Select Topic
    element(by.className('dropdown')).click();
}

function clickOnSaveTopicsButton() {
    // Klik on Save Topics button
    element(by.buttonText('Save Topics')).click();
    browser.sleep(3000);
}

module.exports = {
    landOnEducationAdminPage,
    clickOnWebinarsLink,
    clickOnCreateHostedWebinarButton,
    checkTitleOnPage,
    enterTextInTitleField,
    enterTextInSynopsisField,
    enterTextInDescriptionField,
    enterTextInHereField,
    enterTextInTileField,
    enterTextInPriceField,
    enterTextInStartDateField,
    enterTextInStartDateField2,
    enterTextInEndDateField,
    enterTextInEndDateField2,
    clickToAddSession,
    enterTextInPurchaseDetailsField,
    clickOnSaveWebinarButton,
    addDoc,
    selectPaidForVisibility,
    clickOnUploadAttachButton,
    enterTextInPresentersField,
    clickOnFindttachButton,
    selectTopicTags,
    clickOnTopicToSelect,
    clickOnSaveTopicsButton,
}