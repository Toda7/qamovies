function landOnLeadGenerationForFintech() {
    // Dolazak na Lead Generation for Fintech stranu 
    browser.get('https://qa.cbancnetwork.com/lead-generation-for-fintech'); 
}

function checkLeadGenerationForFintechTitleOfPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Lead Generation for Fintech | CBANC'), 7000);
}

function checkHeroTextOnPage() {
    // Provera glavnog texta na strani 
    var xxx = element(by.className('hero_text'));
    expect(xxx.getText()).toEqual("Lead Generation for Fintech\nWin over your prospects in CBANC\nDiscover how TRUPOINT Partners leveraged the CBANC network to build valuable relationships with their prospects and generate leads.\n5 minute read");
}

function checkImageAtBottom() {
    // Provera da li se ucitala image na dnu stranice
    var xxx = element(by.id('text-box-two-image'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/lead-generation-for-fintech/fintech.jpg');
}

function checkHeroTextOnPage() {
    // Provera texta na dnu stranice 
    var xxx = element(by.className('bottom_text'));
    expect(xxx.getText()).toEqual("CBANC is the largest secure network of verified financial professionals. Our online community and applications empower 8,600+ U.S. financial institutions to collaborate with each other, connect with fintech vendors, and navigate complex industry challenges.\nLearn how your company can benefit from a presence inside CBANC:\nhttps://www.cbancnetwork.com/view-finder");
}

function checkForm() {
    // Provera da li se ucitala forma na strani
    var xxx = element(by.id('download_form'));
    expect(xxx.getText()).toEqual("View Report\nDOWNLOAD");
}

function clickOnDownloadButton() {
    // Klik na Download button 
    element(by.className('button-download')).click(); 
}

function checkDocumentURL() {
    // Provera da li se ucitao PDF dokument, provera URLa
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://static.cbancnetwork.com/Public/Emails/cbanc-win-over-prospects-final.pdf"), 3000);
}

module.exports = {
    landOnLeadGenerationForFintech,
    checkLeadGenerationForFintechTitleOfPage,
    checkHeroTextOnPage,
    checkImageAtBottom,
    checkHeroTextOnPage,
    checkForm,
    clickOnDownloadButton,
    checkDocumentURL,
}
