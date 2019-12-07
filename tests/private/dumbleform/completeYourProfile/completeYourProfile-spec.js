var completeYourProfile = require('./completeYourProfile-po');

describe('Prvi dumbleform - Complete your profile', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na Dumbleform Home Page koja treba da nas redirektuje na Complete Your Profile first step in wizard', function(){
    completeYourProfile.landOnCompleteYourProfileDumbleformHomePage();
});

it('Provera da li se ucitao Complete Your Profile Dumbleform URL', function(){
    completeYourProfile.checkCompleteYourProfileDumbleformURL();
});

it('Provera da li se ucitao page title', function(){
    completeYourProfile.checkDumbleformPageTitle();
});

it('Provera da li se ucitao logo in header', function(){
    completeYourProfile.checkLogoInHeader();
});

it('Provera da li se ucitao top section with the three steps', function(){
    completeYourProfile.checkWizardTopInHeader();
});

it('Provera da li se ucitala title on page', function(){
    completeYourProfile.checkTitleOnPage();
});

it('Provera da li su se ucitale instructions', function(){
    completeYourProfile.checkInstructionsOnPage();
});

it('Brisanje text from the first name field', function(){
    completeYourProfile.deleteTextFromTheFirstNameField();
});

it('Brisanje text from the last name field', function(){
    completeYourProfile.deleteTextFromTheLastNameField();
});

it('Brisanje text from the title field', function(){
    completeYourProfile.deleteTextFromTheTitleField();
});

it('Unselect functional area', function(){
    completeYourProfile.unselectFunctionalArea();
});

it('Unselect functional level', function(){
    completeYourProfile.unselectFunctionalLevel();
});

it('Klik on Next button', function(){
    completeYourProfile.clickOnNextButton();
});

it('Provera da li se pojavila error poruka za First Name prazno polje', function(){
    completeYourProfile.checkMessageErrorForEmptyFirstName();
});

it('Provera da li se pojavila error poruka za Last Name prazno polje', function(){
    completeYourProfile.checkMessageErrorForEmptyLastName();
});

it('Provera da li se pojavila error poruka za Job Title  prazno polje', function(){
    completeYourProfile.checkMessageErrorForEmptyJobTitleField();
});

it('Provera da li se pojavila error poruka za Functional Area prazno polje', function(){
    completeYourProfile.checkMessageErrorForEmptyFunctionalArea();
});

it('Provera da li se pojavila error poruka za Functional Level prazno polje', function(){
    completeYourProfile.checkMessageErrorForEmptyFunctionalLevel();
});

it('Unosenje text u first name field', function(){
    completeYourProfile.enterTextInTheFirstNameField();
});

it('Unosenje text u last name field', function(){
    completeYourProfile.enterTextInTheLastNameField();
});

it('Unosenje text u job title field', function(){
    completeYourProfile.enterTextInTheJobTitleField();
});

it('Select function area', function(){
    completeYourProfile.selectFunctionalArea();
});

it('Select function level', function(){
    completeYourProfile.selectFunctionalLevel();
});

it('Klik on Next button', function(){
    completeYourProfile.clickOnNextButton();
});

it('Provera da li se ucitao Subscribe To Topics Dumbleform URL', function(){
    completeYourProfile.checkSubscribeToTopicsURL();
});

it('Provera da li se ucitao Subscribe To Topics title', function(){
    completeYourProfile.checkTitleOnSubscribeToTopicPage();
});

it('Provera da li se ucitao summary ispod title on page', function(){
    completeYourProfile.checkTitleOnSubscribeToTopicPage();
});

it('Klik to unselect selected topic', function(){
    completeYourProfile.clickToUnselectTopic();
});

it('Klik to unselect selected topic', function(){
    completeYourProfile.clickToUnselectTopic();
});

it('Klik to unselect selected topic', function(){
    completeYourProfile.clickToUnselectTopic();
});

it('Klik on Next button', function(){
    completeYourProfile.clickOnNextButton();
});

it('Provera da li se pojavila error poruka "Please select at least 3 topics."', function(){
    completeYourProfile.checkMessageErrorForSelecAtLeast3Topics();
});

it('Klik to select topic', function(){
    completeYourProfile.clickToSelectTopic();
});

it('Klik to select topic', function(){
    completeYourProfile.clickToSelectTopic();
});

it('Klik to select topic', function(){
    completeYourProfile.clickToSelectTopic();
});

it('Provera da li se pojavila Looks Good! message', function(){
    completeYourProfile.checkMessageLooksGood();
});

it('Klik on Next button', function(){
    completeYourProfile.clickOnNextButton();
});

it('Provera da li se ucitao Update Your Profile Pic URL', function(){
    completeYourProfile.checkUpdateYourProfilePicURL();
});

it('Provera da li se ucitao title on Update Your Profile Pic page', function(){
    completeYourProfile.checkTitleOnUpdateYourProfilePicPage();
});

it('Provera da li se ucitao summary ispod title on page', function(){
    completeYourProfile.checkSummaryOnUpdateYourProfilePicPage();
});

it('Upload myphoto to profile picture', function(){
    completeYourProfile.addPicture();
});

it('Klik on Next button', function(){
    completeYourProfile.clickOnNextButton();
});

it('Provera da li se pojavila Thank You message', function(){
    completeYourProfile.checkThankYouMessage();
});

it('Klik on Continue to CBANC button', function(){
    completeYourProfile.clickOnContinueToCBANCButton();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});