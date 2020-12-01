var buyingHostedWebinar = require('../buyingHostedWebinar/buyingHostedWebinar-po.js');
var buyingOutsourcedWebinar = require('./buyingOutsourcedWebinar-po.js');

describe('Buying outsourced webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buyingHostedWebinar.landOnEducationPage();
    browser.sleep(4000);
});

it('Unosenje texta u search polje', function(){
    buyingOutsourcedWebinar.enterTextInSearchField();
    browser.sleep(1000);
});

it('Klik on search option', function(){
    buyingHostedWebinar.clickOnSearchOption();
    browser.sleep(4000);
});

it('Klik on first webinar on the list of search', function(){
    buyingHostedWebinar.clickOnFirstWebinar();
    browser.sleep(3000);
});

it('Provera da li se ucitao resources section on page', function(){
    buyingHostedWebinar.checkResourcesSection();
    browser.sleep(1000);
});

it('Provera da li se ucitao speakers section on page', function(){
    buyingHostedWebinar.checkSpeakersSection();
    browser.sleep(1000);
});

it('Klik on reserve your seat button', function(){
    buyingHostedWebinar.clickOnReserveYourSeatButton();
    browser.sleep(5000);
});

it('Enter first name of attendee', function(){
    buyingHostedWebinar.enterTextInFirstNameField();
    browser.sleep(1000);
});

it('Enter last name of attendee', function(){
    buyingHostedWebinar.enterTextInLastNameField();
    browser.sleep(1000);
});

it('Enter email of attendee', function(){
    buyingHostedWebinar.enterTextInEmailField();
    browser.sleep(1000);
});

it('Click on add attendee button', function(){
    buyingHostedWebinar.clickOnAddAttendeeButton();
    browser.sleep(2000);
});

it('Click on reserve my spot button', function(){
    buyingHostedWebinar.clickOnReserveMySpotButton();
    browser.sleep(1000);
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila prva error poruka', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Enter numbers in credit card field', function(){
    buyingHostedWebinar.enterNumbersInCreditCardField();
    browser.sleep(1000);
});

it('Enter name of credit card field', function(){
    buyingHostedWebinar.enterNameOfCreditCard();
    browser.sleep(1000);
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila druga error poruka', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Enter numbers in month field', function(){
    buyingHostedWebinar.enterNumbersInMonthField();
    browser.sleep(1000);
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila treca error poruka', function(){
    buyingHostedWebinar.checkThirdErrorMessage();
    browser.sleep(1000);
});

it('Enter numbers in year field', function(){
    buyingHostedWebinar.enterNumbersInYearField();
    browser.sleep(1000);
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila cetvrta error poruka', function(){
    buyingHostedWebinar.checkFourthErrorMessage();
    browser.sleep(1000);
});

it('Enter numbers in CVC field', function(){
    buyingHostedWebinar.enterNumbersInCVCField();
    browser.sleep(1000);
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila error poruka za zip code', function(){
    buyingHostedWebinar.checkErrorMessageForZipCode();
    browser.sleep(1000);
});

it('Enter numbers in zip code field', function(){
    buyingHostedWebinar.enterNumbersInZipField();
    browser.sleep(1000);
});

it('Klik on Agree & Pay button', function(){
    buyingHostedWebinar.clickOnAgreePayButton();
    browser.sleep(4000);
});

it('Dolazak na webinras stranu', function(){
    buyingHostedWebinar.landOnEducationPage();
    browser.sleep(1000);
});

it('Unosenje texta u search polje', function(){
    buyingOutsourcedWebinar.enterTextInSearchField();
    browser.sleep(1000);
});

it('Klik on search option', function(){
    buyingHostedWebinar.clickOnSearchOption();
    browser.sleep(1000);
});

it('Klik on first webinar on the list of search', function(){
    buyingHostedWebinar.clickOnFirstWebinar();
    browser.sleep(1000);
});

it('Provera da li se pojavila This webinar has been purchased. message', function(){
    buyingHostedWebinar.checkPurchaseMessage();
    browser.sleep(1000);
});

it('Hover To Open User Drop', function(){
    buyingHostedWebinar.HoverToOpenUserDrop();
    browser.sleep(1000);
});

it('Klik on SingOut', function(){
    buyingHostedWebinar.clickOnSignOutLink();
    browser.sleep(1000);
});

it('Klik on SinIn', function(){
    buyingHostedWebinar.clickOnSignIn();
    browser.sleep(1000);
});

it('Enter email', function(){
    buyingHostedWebinar.enterEmail();
    browser.sleep(1000);
});

it('Enter password', function(){
    buyingHostedWebinar.enterPass();
    browser.sleep(1000);
});

it('Klik na Submit', function(){
    buyingHostedWebinar.submit();
    browser.sleep(1000);
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});