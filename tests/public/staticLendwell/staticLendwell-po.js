function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
  
 }
function clickOnLink() {
    //  Klik na lendwell link iz drop menu
    element(by.className('lendwell')).click();
 }
 function checkLendwell() {
    // Provera lendwell URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/lendwell'), 7000);
}

function checkLendwellPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Lendwell Mortgage Settlement Services | CBANC'), 7000);
}

function checkTitleAndDescription() {
    // Provera glavnog titla i descriptiona na strani 
    var xxx = element(by.className('hero_container'));
    expect(xxx.getText()).toEqual("Introducing stress free mortgage lending with Lendwell\nSave time and access the best settlement services on the Lendwell platform at 15-20% cost savings.");
}

function checkLearnMoreButton() {
    // Provera Learn More buttna
    var xxx = element(by.className('btn-large'));
    expect(xxx.getText()).toEqual("LEARN MORE");
}

function checkMiddleSectionOnPage() {
    // Provera texta koji se nalazi na sredini strane 
    var xxx = element(by.className('middle_section'));
    expect(xxx.getText()).toEqual("Streamline Your Process\nLendwell is the one-stop shop for all of your settlement products, saving you up to 2 hours per loan file. One login, one form, one support contact, one invoice.\nClose with Confidence\nRest easy. We’ve partnered with the nation’s best settlement service vendors to ensure you receive the highest quality, most accurate information on time, every time.\nLower Your Costs\nBy aggregating volume across many small and mid-sized lenders, we’re able to drive down fees, passing on an average of 15-20% savings in settlement costs to you.");
}

function checkFooter(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitalaucitao footer
    browser.wait(EC.textToBePresentInElement($('.legal'), '2008 - 2020 CBANC Network. All rights reserved.'), 7000);
    browser.sleep(2000);
}    

function checkIntercom(){
    // Provera da li se ucitalaucitao intercom
    var interc = element(by.id('intercom-frame'));
    expect(interc.isDisplayed()).toBe(false);
}

function checkIconForStreamlineYourProcess() {
    // Provera da li se ucitalaimage icon za Streamline Your Process
    var xxx = element(by.className('clock_image'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/clock.png');
}

function checkIconForCloseWithConfidence() {
    // Provera da li se ucitalaimage icon za Close with Confidence
    var xxx = element(by.className('shield_image'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/document.png');
}

function checkIconForLowerYourCosts() {
    // Provera da li se ucitalaimage icon za Lower Your Costs 
    var xxx = element(by.className('arrow_image'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/arrow.png');
}

function checkBottomSectionOnPage() {
    // Provera sekcije na dnu stranice
    var xxx = element(by.className('bottom_section'));
    expect(xxx.getText()).toEqual("Integrated Products and Services\nFlood Determinations\nProperty Valuations\nPortfolio Analysis\nEquity & Lien Protection\nVerification Services\nTitle Services\nDocument Preparation\nClosing Services\nLEARN MORE");
}

function checkFloodDeterminationsImageIcon() {
    // Provera da li se ucitalaimage icon za Flood Determinations 
    var xxx = element.all(by.tagName('img')).get(7);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-flood.png');
}

function checkPropertyValuationsImageIcon() {
    // Provera da li se ucitalaimage icon za Property Valuations
    var xxx = element.all(by.tagName('img')).get(8);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-property.png');
}

function checkPortfolioAnalysisImageIcon() {
    // Provera da li se ucitalaimage icon za Portfolio Analysis
    var xxx = element.all(by.tagName('img')).get(9);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-pcr.png');
}

function checkEquityLienProtectionImageIcon() {
    // Provera da li se ucitalaimage icon za Equity & Lien Protection
    var xxx = element.all(by.tagName('img')).get(10);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-lien.png');
}

function checkVerificationServicesImageIcon() {
    // Provera da li se ucitalaimage icon za Verification Services
    var xxx = element.all(by.tagName('img')).get(11);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-legal-vesting.png');
}

function checkTitleServicesImageIcon() {
    // Provera da li se ucitalaimage icon za Title Services
    var xxx = element.all(by.tagName('img')).get(12);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-title.png');
}

function checkDocumentPreparationImageIcon() {
    // Provera da li se image icon za Document Preparation
    var xxx = element.all(by.tagName('img')).get(13);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-docprep.png');
}

function checkClosingServicesImageIcon() {
    // Provera da li se image icon za Closing Services
    var xxx = element.all(by.tagName('img')).get(14);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lendwell/icon-closing.png');
}

function clickOnLearnMoreButton() {
    //  Klik na prvi Learn More button 
    element(by.className('btn-large')).click();
 }

 function checkForm() {
    // Provera da li se otvorila forma
    var xxx = element(by.id('lead_form'));
    expect(xxx.getText()).toEqual("Contact us to learn more\n×\nSUBMIT");
}

function enterJobTitle(){
    //  Unosenje text u Title field
    element(by.id('title')).clear().sendKeys('QA QA QA');
}

function enterZipCode(){
    //  Unosenje numbers u zip code field
    element(by.id('zipcode')).clear().sendKeys('75001');
}

function clickOnSubmitButton(){
// Klik na SUBMIT button
element(by.buttonText('SUBMIT')).click();
}

function checkSuccessURL() {
    // Provera Success URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://www.cbancnetwork.com/lendwell?success=true'), 7000);
}

function checkSuccessMessages() {
    // Provera success poruke
    var xxx = element(by.id('lead_success'));
    expect(xxx.getText()).toEqual("×\nThanks! A representative from Lendwell will be in touch with you shortly.\nIn the meantime, if you'd like to take a look at the Lendwell app, login here.");
}

function landOnQaSuccessPage() {
    // Dolazak na Success Page na QA
    browser.get('https://www.cbancnetwork.com/lendwell?success=true'); 
}

function landOnLendwellPage() {
    // Dolazak na Lendwell stranu
    browser.get('https://qa.cbancnetwork.com/lendwell'); 
}

module.exports = {
    HoverToOpenDrop,
    clickOnLink,
    checkLendwell,
    checkLendwellPageTitle,
    checkTitleAndDescription,
    checkLearnMoreButton,
    checkMiddleSectionOnPage,
    checkFooter,
    checkIntercom,
    checkIconForStreamlineYourProcess,
    checkIconForCloseWithConfidence,
    checkIconForLowerYourCosts,
    checkBottomSectionOnPage,
    checkFloodDeterminationsImageIcon,
    checkPropertyValuationsImageIcon,
    checkPortfolioAnalysisImageIcon,
    checkEquityLienProtectionImageIcon,
    checkVerificationServicesImageIcon,
    checkTitleServicesImageIcon,
    checkDocumentPreparationImageIcon,
    checkClosingServicesImageIcon,
    clickOnLearnMoreButton,
    checkForm,
    enterZipCode,
    enterJobTitle,
    clickOnSubmitButton,
    checkSuccessURL,
    checkSuccessMessages,
    landOnQaSuccessPage,
    landOnLendwellPage,
}