function landOnCompleteYourProfileDumbleformHomePage() {
    // Dolazak na Dumbleform Home Page koja treba da nas redirektuje na Complete Your Profile first step in wizard
    browser.get('https://qa.cbancnetwork.com/dumbleform/24b2a16c-448f-11e6-81f3-7831c1baaeec/home'); 
    browser.sleep(3000);
}
function checkCompleteYourProfileDumbleformURL() {
    // Provera da li se ucitao Complete Your Profile Dumbleform URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/dumbleform/24b2a16c-448f-11e6-81f3-7831c1baaeec/profile_info'), 5000);
    browser.sleep(2000);
}
function checkDumbleformPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Onboarding Wizard | CBANC Network'), 5000);
}
function checkLogoInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao logo in header
    browser.wait(EC.presenceOf($('#logo')), 5000);
}
function checkUserNavInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao logo in header
    browser.wait(EC.presenceOf($('.user_nav')), 5000);
}
function checkWizardTopInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitao top section with the three steps 
    browser.wait(EC.presenceOf($('.ui_wizard_top')), 5000);
}
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Complete Your Profile'), 5000);
}   
function checkInstructionsOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitale instructions
    browser.wait(EC.textToBePresentInElement($('.instructions'), 'To get the most value out of CBANC, please take a moment to complete your profile.'), 5000);
    browser.wait(EC.textToBePresentInElement($('.instructions'), 'We use this info to help you connect with the most relevant content and people.'), 5000);
}   
function deleteTextFromTheFirstNameField() {
    // Brisanje text from the first name field
    element(by.name('first_name')).clear();
    browser.sleep(2000);
}
function deleteTextFromTheLastNameField() {
    // Brisanje text from the last name field
    element(by.name('last_name')).clear();
    browser.sleep(2000);
}
function deleteTextFromTheTitleField() {
    // Brisanje text from the title field
    element(by.name('title')).clear();
    browser.sleep(2000);
}
function unselectFunctionalArea() {
    // Unselect functional area 
    element(by.cssContainingText('option', '')).click();
    browser.sleep(2000);
}
function unselectFunctionalLevel() {
    // Unselect functional level 
    $('[name="functional_level"]').element(by.cssContainingText('option', '')).click();
    browser.sleep(2000);
}
function clickOnNextButton() {
    // Klik on NEXT button
    element(by.buttonText('Next')).click();
    browser.sleep(2000);
}
function checkMessageErrorForEmptyFirstName(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka za First Name prazno polje
    browser.wait(EC.textToBePresentInElement($('.message.error'), 'First Name is required'), 5000);
    browser.sleep(2000);
}   
function checkMessageErrorForEmptyLastName(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka za Last Name prazno polje
    browser.wait(EC.textToBePresentInElement($('#page_message'), 'Last Name is required'), 5000);
}   
function checkMessageErrorForEmptyJobTitleField(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka za Job Title  prazno polje
    browser.wait(EC.textToBePresentInElement($('#page_message'), 'Job Title is required'), 5000);
    browser.sleep(2000);
}   
function checkMessageErrorForEmptyFunctionalArea(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka za Functional Area prazno polje
    browser.wait(EC.textToBePresentInElement($('#page_message'), 'Primary Role is required'), 5000);
}   
function checkMessageErrorForEmptyFunctionalLevel(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka za Functional Level prazno polje
    browser.wait(EC.textToBePresentInElement($('#page_message'), 'Role Level is required'), 5000);
}    
function enterTextInTheFirstNameField() {
    // Unosenje text u first name field
    element(by.name('first_name')).sendKeys('Chicago Alberto');
    browser.sleep(2000);
}
function enterTextInTheLastNameField() {
    // Unosenje text u last name field
    element(by.name('last_name')).sendKeys('Diaz FI');
    browser.sleep(2000);
}
function enterTextInTheJobTitleField() {
    // Unosenje text u job title field
    element(by.name('title')).sendKeys('QA');
    browser.sleep(2000);
}
function selectFunctionalArea() {
    // Select function area 
    element(by.cssContainingText('option', 'Technology')).click();
    browser.sleep(2000);
}
function selectFunctionalLevel() {
    // Select function level
    $('[name="functional_level"]').element(by.cssContainingText('option', 'Employee')).click();
    browser.sleep(2000);
}
function checkSubscribeToTopicsURL() {
    // Provera da li se ucitao Subscribe To Topics Dumbleform URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/dumbleform/24b2a16c-448f-11e6-81f3-7831c1baaeec/subscribe_topics'), 5000);
}
function checkTitleOnSubscribeToTopicPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Subscribe To Topics title
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Subscribe to Topics'), 5000);
}    
function checkSummaryOnSubscribeToTopicPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao summary ispod title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Pick the topics that interest you most.'), 5000);
}    
function clickToUnselectTopic() {
    // Klik to unselect selected topic
    element(by.css('main.dumbleform_subscribe_topics .topics_field .selected_topics li span')).click();
    // element(by.cssContainingText('selected_topics', 'Stress Testing')).click();
    browser.sleep(2000);
}
function checkMessageErrorForSelecAtLeast3Topics(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka for select at least 3 topics
    browser.wait(EC.textToBePresentInElement($('#page_message'), 'Please select at least 3 topics.'), 5000);
}   
function clickToSelectTopic() {
    // Klik to select topic
    element(by.css('main.dumbleform_subscribe_topics .topics_field .topics_list .topics_results ul li span')).click();
    browser.sleep(2000);
}
function checkMessageLooksGood(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila Looks Good! message
    browser.wait(EC.textToBePresentInElement($('#page_message'), 'Looks good!'), 5000);
}   
function checkUpdateYourProfilePicURL() {
    // Provera da li se ucitao Update Your Profile Pic URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/dumbleform/24b2a16c-448f-11e6-81f3-7831c1baaeec/avatar'), 5000);
}
function checkTitleOnUpdateYourProfilePicPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on Update Your Profile Pic page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Update Your Profile Pic'), 5000);
}    
function checkSummaryOnUpdateYourProfilePicPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao summary ispod title on page
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Add a profile pic to make your contributions stand out.'), 5000);
}    
function addPicture() {
    // Upload myphoto to profile picture
    var path = require('path');
    var fileToUpload = './myphoto.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    browser.sleep(3000);
 }
 function checkThankYouMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila Thank You message
    browser.wait(EC.textToBePresentInElement($('.dumbleform'), 'Thank You'), 5000);
}    
function clickOnContinueToCBANCButton() {
    // Klik on Continue to CBANC button
    element(by.className('cta')).click();
    browser.sleep(2000);
}
module.exports = {
    landOnCompleteYourProfileDumbleformHomePage,
    checkCompleteYourProfileDumbleformURL,
    checkDumbleformPageTitle,
    checkLogoInHeader,
    checkUserNavInHeader,
    checkWizardTopInHeader,
    checkTitleOnPage,
    checkInstructionsOnPage,
    deleteTextFromTheFirstNameField,
    deleteTextFromTheLastNameField,
    deleteTextFromTheTitleField,
    unselectFunctionalArea,
    unselectFunctionalLevel,
    clickOnNextButton,
    checkMessageErrorForEmptyFirstName,
    checkMessageErrorForEmptyLastName,
    checkMessageErrorForEmptyJobTitleField,
    checkMessageErrorForEmptyFunctionalArea,
    checkMessageErrorForEmptyFunctionalLevel,
    enterTextInTheFirstNameField,
    enterTextInTheLastNameField,
    enterTextInTheJobTitleField,
    selectFunctionalArea,
    selectFunctionalLevel,
    checkSubscribeToTopicsURL,
    checkTitleOnSubscribeToTopicPage,
    checkSummaryOnSubscribeToTopicPage,
    clickToUnselectTopic,
    checkMessageErrorForSelecAtLeast3Topics,
    clickToSelectTopic,
    checkMessageLooksGood,
    checkUpdateYourProfilePicURL,
    checkTitleOnUpdateYourProfilePicPage,
    checkSummaryOnUpdateYourProfilePicPage,
    addPicture,
    checkThankYouMessage,
    clickOnContinueToCBANCButton,
}