var followColleagues = require('./followColleagues-po');
var completeYourProfile = require('../completeYourProfile/completeYourProfile-po');


describe('Drugi dumbleform - Follow colleagues', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na Followe Colleagues Home Page', function(){
    followColleagues.landOnFolloweColleaguesHomePage();
});

it('Provera da li se pojavio help title on page', function(){
    followColleagues.checkHelpTitleOnHomePage();
});

it('Provera da li se pojavio summary ispod title on page', function(){
    followColleagues.checkHelpSummaryOnHomePage();
});

it('Klik on GET STARTED button', function(){
    followColleagues.clickOnGetStartedButton();
});

it('Provera follow colleagues URL-a', function(){
    followColleagues.checkFolloweColleaguesURL();
});

it('Provera da li se ucitao page title', function(){
    completeYourProfile.checkDumbleformPageTitle();
});

it('Provera da li se ucitao logo in header', function(){
    completeYourProfile.checkLogoInHeader();
});

it('Provera da li se ucitao title on page', function(){
    followColleagues.checkTitleOnPage();
});

it('Provera da li se ucitao description ispod title on page', function(){
    followColleagues.checkDescriptionOnPage();
});

it('Click to unselect checkbox', function(){
    followColleagues.clickOnCheckbox();
});

it('Click to NEXT button', function(){
    followColleagues.clickOnNextButton();
});

it('Provera da li se pojavio Invite Colleagues title on page', function(){
    followColleagues.checkInviteColleaguesTitleOnHomePage();
});

it('Provera da li se pojavio Invite Colleagues description on page', function(){
    followColleagues.checkInviteColleaguesDescriptionOnHomePage();
});

it('Provera da li postoji vec uneti email u invite formu, trebalo bi da bude 0', function(){
    followColleagues.checkInvitesThatWellSend();
});

it('Unosenje email u invite email field', function(){
    followColleagues.enterEmailInTheField();
});

it('Klik on Add To List Of Invites Link', function(){
    followColleagues.clickOnAddToListOfInvitesLink();
});

it('Click to NEXT button', function(){
    followColleagues.clickOnNextButton();
});

it('Provera da li se pojavio Follow vendors title on page', function(){
    followColleagues.checkFollowVendorsTitleOnHomePage();
});

it('Unosenje text u search vendors field', function(){
    followColleagues.enterTextInSearchField();
});

it('Click on search button', function(){
    followColleagues.clickOnSearchButton();
});

it('Click to unselect checkbox', function(){
    followColleagues.clickOnCheckbox();
});


it('Click to NEXT button', function(){
    followColleagues.clickOnNextButton();
});

it('Provera da li se pojavio Thank you title on page', function(){
    followColleagues.checkThankYouMessage();
});

it('Klik on Continue to CBANC button', function(){
    completeYourProfile.clickOnContinueToCBANCButton();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});