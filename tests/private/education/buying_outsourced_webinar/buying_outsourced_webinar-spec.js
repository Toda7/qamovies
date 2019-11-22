var buying_hosted_webinar = require('../buying_hosted_webinar/buying_hosted_webinar-po.js');
var buying_outsourced_webinar = require('./buying_outsourced_webinar-po.js');

describe('Buying outsourced webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buying_hosted_webinar.landOnEducationPage();
});

it('Unosenje texta u search polje', function(){
    buying_outsourced_webinar.enterTextInSearchField();
});

it('Klik on search option', function(){
    buying_hosted_webinar.clickOnSearchOption();
});

it('Klik on first webinar on the list of search', function(){
    buying_hosted_webinar.clickOnFirstWebinar();
});

it('Provera da li se ucitao resources section on page', function(){
    buying_hosted_webinar.checkResourcesSection();
});

it('Provera da li se ucitao speakers section on page', function(){
    buying_hosted_webinar.checkSpeakersSection();
});

it('Klik on reserve your seat button', function(){
    buying_hosted_webinar.clickOnReserveYourSeatButton();
});

it('Enter first name of attendee', function(){
    buying_hosted_webinar.enterTextInFirstNameField();
});

it('Enter last name of attendee', function(){
    buying_hosted_webinar.enterTextInLastNameField();
});

it('Enter email of attendee', function(){
    buying_hosted_webinar.enterTextInEmailField();
});

it('Click on add attendee button', function(){
    buying_hosted_webinar.clickOnAddAttendeeButton();
});

it('Click on reserve my spot button', function(){
    buying_hosted_webinar.clickOnReserveMySpotButton();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila prva error poruka', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Enter numbers in credit card field', function(){
    buying_hosted_webinar.enterNumbersInCreditCardField();
});

it('Enter name of credit card field', function(){
    buying_hosted_webinar.enterNameOfCreditCard();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila druga error poruka', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Enter numbers in month field', function(){
    buying_hosted_webinar.enterNumbersInMonthField();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila treca error poruka', function(){
    buying_hosted_webinar.checkThirdErrorMessage();
});

it('Enter numbers in year field', function(){
    buying_hosted_webinar.enterNumbersInYearField();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila cetvrta error poruka', function(){
    buying_hosted_webinar.checkFourthErrorMessage();
});

it('Enter numbers in CVC field', function(){
    buying_hosted_webinar.enterNumbersInCVCField();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila error poruka za zip code', function(){
    buying_hosted_webinar.checkErrorMessageForZipCode();
});

it('Enter numbers in zip code field', function(){
    buying_hosted_webinar.enterNumbersInZipField();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Dolazak na webinras stranu', function(){
    buying_hosted_webinar.landOnEducationPage();
});

it('Unosenje texta u search polje', function(){
    buying_outsourced_webinar.enterTextInSearchField();
});

it('Klik on search option', function(){
    buying_hosted_webinar.clickOnSearchOption();
});

it('Klik on first webinar on the list of search', function(){
    buying_hosted_webinar.clickOnFirstWebinar();
});

it('Provera da li se pojavila This webinar has been purchased. message', function(){
    buying_hosted_webinar.checkPurchaseMessage();
});

it('Hover To Open User Drop', function(){
    buying_hosted_webinar.HoverToOpenUserDrop();
});

it('Klik on SingOut', function(){
    buying_hosted_webinar.clickOnSignOutLink();
});

it('Klik on SinIn', function(){
    buying_hosted_webinar.clickOnSignIn();
});

it('Enter email', function(){
    buying_hosted_webinar.enterEmail();
});

it('Enter password', function(){
    buying_hosted_webinar.enterPass();
});

it('Klik na Submit', function(){
    buying_hosted_webinar.submit();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});