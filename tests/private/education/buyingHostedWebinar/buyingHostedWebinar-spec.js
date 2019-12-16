var buyingHostedWebinar = require('./buyingHostedWebinar-po.js');

describe('Buying hosted webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buyingHostedWebinar.landOnEducationPage();
});

it('Unosenje texta u search polje', function(){
    buyingHostedWebinar.enterTextInSearchField();
});

it('Klik on search option', function(){
    buyingHostedWebinar.clickOnSearchOption();
});

it('Klik on first webinar on the list of search', function(){
    buyingHostedWebinar.clickOnFirstWebinar();
});

it('Provera da li se ucitao resources section on page', function(){
    buyingHostedWebinar.checkResourcesSection();
});

it('Provera da li se ucitao speakers section on page', function(){
    buyingHostedWebinar.checkSpeakersSection();
});

it('Klik on reserve your seat button', function(){
    buyingHostedWebinar.clickOnReserveYourSeatButton();
});

it('Enter first name of attendee', function(){
    buyingHostedWebinar.enterTextInFirstNameField();
});

it('Enter last name of attendee', function(){
    buyingHostedWebinar.enterTextInLastNameField();
});

it('Enter email of attendee', function(){
    buyingHostedWebinar.enterTextInEmailField();
});

it('Click on add attendee button', function(){
    buyingHostedWebinar.clickOnAddAttendeeButton();
});

it('Click on reserve my spot button', function(){
    buyingHostedWebinar.clickOnReserveMySpotButton();
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila prva error poruka', function(){
    buyingHostedWebinar.checkFirstErrorMessage();
});

it('Enter numbers in credit card field', function(){
    buyingHostedWebinar.enterNumbersInCreditCardField();
});

it('Enter name of credit card field', function(){
    buyingHostedWebinar.enterNameOfCreditCard();
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila druga error poruka', function(){
    buyingHostedWebinar.checkSecondErrorMessage();
});

it('Enter numbers in month field', function(){
    buyingHostedWebinar.enterNumbersInMonthField();
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila treca error poruka', function(){
    buyingHostedWebinar.checkThirdErrorMessage();
});

it('Enter numbers in year field', function(){
    buyingHostedWebinar.enterNumbersInYearField();
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila cetvrta error poruka', function(){
    buyingHostedWebinar.checkFourthErrorMessage();
});

it('Enter numbers in CVC field', function(){
    buyingHostedWebinar.enterNumbersInCVCField();
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
});

it('Provera da li se pojavila error poruka za zip code', function(){
    buyingHostedWebinar.checkErrorMessageForZipCode();
});

it('Enter numbers in zip code field', function(){
    buyingHostedWebinar.enterNumbersInZipField();
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
});

it('Dolazak na webinras stranu', function(){
    buyingHostedWebinar.landOnEducationPage();
});

it('Unosenje texta u search polje', function(){
    buyingHostedWebinar.enterTextInSearchField();
});

it('Klik on search option', function(){
    buyingHostedWebinar.clickOnSearchOption();
});

it('Klik on first webinar on the list of search', function(){
    buyingHostedWebinar.clickOnFirstWebinar();
});

it('Provera da li se pojavila This webinar has been purchased. message', function(){
    buyingHostedWebinar.checkPurchaseMessage();
});

it('Hover To Open User Drop', function(){
    buyingHostedWebinar.HoverToOpenUserDrop();
});

it('Klik on SingOut', function(){
    buyingHostedWebinar.clickOnSignOutLink();
});

it('Klik on SinIn', function(){
    buyingHostedWebinar.clickOnSignIn();
});

it('Enter email', function(){
    buyingHostedWebinar.enterEmail();
});

it('Enter password', function(){
    buyingHostedWebinar.enterPass();
});

it('Klik na Submit', function(){
    buyingHostedWebinar.submit();
});



afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});