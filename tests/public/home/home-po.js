function checkPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC | The professional network for the banking industry.'), 7000);
}

function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao join button 
    browser.wait(EC.textToBePresentInElement($('#cta_join_1'), 'JOIN FOR FREE'), 7000);
    browser.sleep(2000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('.hero_content'), 'Answers for every bank and credit union'), 7000);
}

function checkNumbersOfDownloads(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za downloads
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '3MM+'), 7000);
}

function checkNumberOfAnswers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za answers
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '100K'), 7000);
}

function checkNumbersOfFinancialInstitutions(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za financial institutions
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '8600+'), 7000);
    browser.sleep(2000);
}

function checkDocImage() {
    // Provera da li se ucitao document icon 
    var xxx = element(by.className('doc'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/home/doc-icon.svg');
    browser.sleep(500);
}

function checkDocumentSection() {
    // Provera document section
    var xxx = element.all(by.className('icon')).get(0);
    expect(xxx.getText()).toEqual('ACCESS THOUSANDS OF POLICY DOCUMENTS.\nGet tried-and-true resources used by bank and credit union employees across the U.S.');
}

function checkPeersImage() {
    // Provera da li se ucitao peers icon 
    var xxx = element(by.className('peers'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/home/peers-icon.svg');
    browser.sleep(500);
}

function checkPeersSection() {
    // Provera peers section
    var xxx = element.all(by.className('icon')).get(1);
    expect(xxx.getText()).toEqual('CONNECT WITH INDUSTRY PEERS.\nFind answers to your toughest questions from the largest verified network of FI professionals.');
}

function checkVendorImage() {
    // Provera da li se ucitao Vendor icon 
    var xxx = element(by.className('vendor'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/home/vendor-icon.svg');
    browser.sleep(500);
}

function checkVendorSection() {
    // Provera Vendor section
    var xxx = element.all(by.className('icon')).get(2);
    expect(xxx.getText()).toEqual('RESEARCH VENDORS AND PRODUCTS.\nGet valuable insights on hundreds of products and services.');
}

function checkBottomSection(){
    // Provera da li se ucitao bottom section
    var xxx = element(by.className('bottom_section'));
    expect(xxx.getText()).toEqual('Join the largest online network of verified banking and credit union professionals.\nGet your questions answered, exchange ideas, and build your industry reputation.\nJOIN FOR FREE');
}

function checkIntercom(){
    // Provera da li se ucitao intercom
    var interc = element(by.id('intercom-modal-container'));
    expect(interc.isDisplayed()).toBe(false);
} 

module.exports = {
    checkPageTitle,
    checkButton,
    checkTitleOnPage,
    checkNumbersOfDownloads,
    checkNumberOfAnswers,
    checkNumbersOfFinancialInstitutions,
    checkIntercom,
    checkDocImage,
    checkDocumentSection,
    checkPeersImage,
    checkPeersSection,
    checkVendorImage,
    checkVendorSection,
    checkBottomSection,
}