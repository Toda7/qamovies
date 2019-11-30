var follow_colleagues = require('./follow_colleagues-po');
var complete_your_profile = require('../complete_your_profile/complete_your_profile-po');


describe('Drugi dumbleform - Follow colleagues', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na Followe Colleagues Home Page', function(){
    follow_colleagues.landOnFolloweColleaguesHomePage();
});

it('Provera da li se pojavio help title on page', function(){
    follow_colleagues.checkHelpTitleOnHomePage();
});

it('Provera da li se pojavio summary ispod title on page', function(){
    follow_colleagues.checkHelpSummaryOnHomePage();
});

it('Klik on GET STARTED button', function(){
    follow_colleagues.clickOnGetStartedButton();
});

it('Provera follow colleagues URL-a', function(){
    follow_colleagues.checkFolloweColleaguesURL();
});

it('Provera da li se ucitao page title', function(){
    complete_your_profile.checkDumbleformPageTitle();
});

it('Provera da li se ucitao logo in header', function(){
    complete_your_profile.checkLogoInHeader();
});

it('Provera da li se ucitao title on page', function(){
    follow_colleagues.checkTitleOnPage();
});

it('Provera da li se ucitao description ispod title on page', function(){
    follow_colleagues.checkDescriptionOnPage();
});

it('Click to unselect checkbox', function(){
    follow_colleagues.clickOnCheckbox();
});

it('Click to NEXT button', function(){
    follow_colleagues.clickOnNextButton();
});

it('Provera da li se pojavio Invite Colleagues title on page', function(){
    follow_colleagues.checkInviteColleaguesTitleOnHomePage();
});

it('Provera da li se pojavio Invite Colleagues description on page', function(){
    follow_colleagues.checkInviteColleaguesDescriptionOnHomePage();
});

it('Provera da li postoji vec uneti email u invite formu, trebalo bi da bude 0', function(){
    follow_colleagues.checkInvitesThatWellSend();
});

it('Unosenje email u invite email field', function(){
    follow_colleagues.enterEmailInTheField();
});

it('Klik on Add To List Of Invites Link', function(){
    follow_colleagues.clickOnAddToListOfInvitesLink();
});

it('Click to NEXT button', function(){
    follow_colleagues.clickOnNextButton();
});

it('Provera da li se pojavio Follow vendors title on page', function(){
    follow_colleagues.checkFollowVendorsTitleOnHomePage();
});

it('Unosenje text u search vendors field', function(){
    follow_colleagues.enterTextInSearchField();
});

it('Click on search button', function(){
    follow_colleagues.clickOnSearchButton();
});

it('Click to unselect checkbox', function(){
    follow_colleagues.clickOnCheckbox();
});


it('Click to NEXT button', function(){
    follow_colleagues.clickOnNextButton();
});

it('Provera da li se pojavio Thank you title on page', function(){
    follow_colleagues.checkThankYouMessage();
});

it('Klik on Continue to CBANC button', function(){
    complete_your_profile.clickOnContinueToCBANCButton();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});