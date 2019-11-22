var complete_your_profile = require('./complete_your_profile-po');

describe('Prvi dumbleform - Complete your profile', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na Dumbleform Home Page koja treba da nas redirektuje na Complete Your Profile first step in wizard', function(){
    complete_your_profile.landOnCompleteYourProfileDumbleformHomePage();
});

it('Provera da li se ucitao Complete Your Profile Dumbleform URL', function(){
    complete_your_profile.checkCompleteYourProfileDumbleformURL();
});

it('Provera da li se ucitao page title', function(){
    complete_your_profile.checkDumbleformPageTitle();
});

it('Provera da li se ucitao logo in header', function(){
    complete_your_profile.checkLogoInHeader();
});

it('Provera da li se ucitao top section with the three steps', function(){
    complete_your_profile.checkWizardTopInHeader();
});

it('Provera da li se ucitala title on page', function(){
    complete_your_profile.checkTitleOnPage();
});

it('Provera da li su se ucitale instructions', function(){
    complete_your_profile.checkInstructionsOnPage();
});

it('Brisanje text from the first name field', function(){
    complete_your_profile.deleteTextFromTheFirstNameField();
});

it('Brisanje text from the last name field', function(){
    complete_your_profile.deleteTextFromTheLastNameField();
});

it('Brisanje text from the title field', function(){
    complete_your_profile.deleteTextFromTheTitleField();
});

it('Unselect functional area', function(){
    complete_your_profile.unselectFunctionalArea();
});

it('Unselect functional level', function(){
    complete_your_profile.unselectFunctionalLevel();
});

it('Klik on Next button', function(){
    complete_your_profile.clickOnNextButton();
});

it('Provera da li se pojavila error poruka za First Name prazno polje', function(){
    complete_your_profile.checkMessageErrorForEmptyFirstName();
});

it('Provera da li se pojavila error poruka za Last Name prazno polje', function(){
    complete_your_profile.checkMessageErrorForEmptyLastName();
});

it('Provera da li se pojavila error poruka za Job Title  prazno polje', function(){
    complete_your_profile.checkMessageErrorForEmptyJobTitleField();
});

it('Provera da li se pojavila error poruka za Functional Area prazno polje', function(){
    complete_your_profile.checkMessageErrorForEmptyFunctionalArea();
});

it('Provera da li se pojavila error poruka za Functional Level prazno polje', function(){
    complete_your_profile.checkMessageErrorForEmptyFunctionalLevel();
});

it('Unosenje text u first name field', function(){
    complete_your_profile.enterTextInTheFirstNameField();
});

it('Unosenje text u last name field', function(){
    complete_your_profile.enterTextInTheLastNameField();
});

it('Unosenje text u job title field', function(){
    complete_your_profile.enterTextInTheJobTitleField();
});

it('Select function area', function(){
    complete_your_profile.selectFunctionalArea();
});

it('Select function level', function(){
    complete_your_profile.selectFunctionalLevel();
});

it('Klik on Next button', function(){
    complete_your_profile.clickOnNextButton();
});

it('Provera da li se ucitao Subscribe To Topics Dumbleform URL', function(){
    complete_your_profile.checkSubscribeToTopicsURL();
});

it('Provera da li se ucitao Subscribe To Topics title', function(){
    complete_your_profile.checkTitleOnSubscribeToTopicPage();
});

it('Provera da li se ucitao summary ispod title on page', function(){
    complete_your_profile.checkTitleOnSubscribeToTopicPage();
});

it('Klik to unselect selected topic', function(){
    complete_your_profile.clickToUnselectTopic();
});

it('Klik to unselect selected topic', function(){
    complete_your_profile.clickToUnselectTopic();
});

it('Klik to unselect selected topic', function(){
    complete_your_profile.clickToUnselectTopic();
});

it('Klik on Next button', function(){
    complete_your_profile.clickOnNextButton();
});

it('Provera da li se pojavila error poruka "Please select at least 3 topics."', function(){
    complete_your_profile.checkMessageErrorForSelecAtLeast3Topics();
});

it('Klik to select topic', function(){
    complete_your_profile.clickToSelectTopic();
});

it('Klik to select topic', function(){
    complete_your_profile.clickToSelectTopic();
});

it('Klik to select topic', function(){
    complete_your_profile.clickToSelectTopic();
});

it('Provera da li se pojavila Looks Good! message', function(){
    complete_your_profile.checkMessageLooksGood();
});

it('Klik on Next button', function(){
    complete_your_profile.clickOnNextButton();
});

it('Provera da li se ucitao Update Your Profile Pic URL', function(){
    complete_your_profile.checkUpdateYourProfilePicURL();
});

it('Provera da li se ucitao title on Update Your Profile Pic page', function(){
    complete_your_profile.checkTitleOnUpdateYourProfilePicPage();
});

it('Provera da li se ucitao summary ispod title on page', function(){
    complete_your_profile.checkSummaryOnUpdateYourProfilePicPage();
});

it('Upload myphoto to profile picture', function(){
    complete_your_profile.addPicture();
});

it('Klik on Next button', function(){
    complete_your_profile.clickOnNextButton();
});

it('Provera da li se pojavila Thank You message', function(){
    complete_your_profile.checkThankYouMessage();
});

it('Klik on Continue to CBANC button', function(){
    complete_your_profile.clickOnContinueToCBANCButton();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});