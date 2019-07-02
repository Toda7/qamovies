function landOnFolloweColleaguesHomePage() {
    // Dolazak na Followe Colleagues Home Page
    browser.get('https://qa.cbancnetwork.com/dumbleform/23479f65-f4ac-4295-bb22-c446519fec15/home'); 
}
function checkHelpTitleOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio help title on page
    browser.wait(EC.textToBePresentInElement($('.wizard_home'), 'Help Us Help You!'), 5000);
}   
function checkHelpSummaryOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio summary ispod title on page
    browser.wait(EC.textToBePresentInElement($('.middle'), 'Please take a moment to edit or confirm your profile information.'), 5000);
}  
function clickOnGetStartedButton() {
    // Klik on GET STARTED button
    element(by.className('cta')).click();
    browser.sleep(2000);
}
function checkFolloweColleaguesURL() {
    // Provera follow colleagues URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/dumbleform/23479f65-f4ac-4295-bb22-c446519fec15/follow_colleagues'), 5000);
    browser.sleep(2000);
}
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Follow Colleagues'), 5000);
}  
function checkDescriptionOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao description ispod title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Following the right people can increase the benefit you get out of the CBANC Network.'), 5000);
}  
function clickOnCheckbox() {
    // Click to unselect checkbox
    element(by.className('field checkbox_field')).click();
    browser.sleep(2000);
}
function clickOnNextButton() {
    // Click to unselect checkbox
    element(by.buttonText('Next')).click();
    browser.sleep(2000);
}
function checkInviteColleaguesTitleOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio Invite Colleagues title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Invite Colleagues'), 5000);
}   
function checkInviteColleaguesDescriptionOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio Invite Colleagues description on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'A more powerful, helpful network starts with people like you. Send a friendly invitation to your colleagues.'), 5000);
}   
function checkInvitesThatWellSend(){
    var EC = protractor.ExpectedConditions;
    // Provera da li postoji vec uneti email u invite formu, trebalo bi da bude 0 
    browser.wait(EC.textToBePresentInElement($('.main.dumbleform_invite_colleagues h4'), '0'), 5000);
}   
function enterEmailInTheField() {
    // Unosenje text u invite email field
    element(by.name('email_of_colleague')).sendKeys('test@test.com');
    browser.sleep(2000);
}
function clickOnAddToListOfInvitesLink() {
    // Klik on Add To List Of Invites Link
    element(by.css('main.dumbleform_invite_colleagues .invite_form .cta button')).click();
    browser.sleep(2000);
}  
function checkFollowVendorsTitleOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio Follow vendors title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Follow Vendors'), 5000);
}  
function enterTextInSearchField() {
    // Unosenje text u search vendors field
    element(by.name('vendor_search')).sendKeys('FIFA');
    browser.sleep(2000);
}
function clickOnSearchButton() {
    // Click to unselect checkbox
    element(by.buttonText('Search')).click();
    browser.sleep(2000);
}
function checkThankYouMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio Thank you title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Thank You'), 5000);
}  

module.exports = {
    landOnFolloweColleaguesHomePage,
    checkHelpTitleOnHomePage,
    checkHelpSummaryOnHomePage,
    clickOnGetStartedButton,
    checkFolloweColleaguesURL,
    checkTitleOnPage,
    checkDescriptionOnPage,
    clickOnCheckbox,
    clickOnNextButton,
    checkInviteColleaguesTitleOnHomePage,
    checkInviteColleaguesDescriptionOnHomePage,
    checkInvitesThatWellSend,
    enterEmailInTheField,
    clickOnAddToListOfInvitesLink,
    checkFollowVendorsTitleOnHomePage,
    enterTextInSearchField,
    clickOnSearchButton,
    checkThankYouMessage,
}