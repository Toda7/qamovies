var buyingVideo = require('./buyingVideo-po.js');
var buyingHostedWebinar = require('../buyingHostedWebinar/buyingHostedWebinar-po.js');

describe('Buying video ', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
    browser.sleep(1000);
});

it('Dolazak na webinras stranu', function(){
    buyingVideo.landOnVideoPage();
    browser.sleep(4000);
});

it('Unosenje texta u search polje', function(){
    buyingVideo.enterTextInSearchField();
    browser.sleep(1000);
});

it('Klik on search option', function(){
    buyingHostedWebinar.clickOnSearchOption();
    browser.sleep(3000);
});

it('Klik on first video on the list of search', function(){
    buyingHostedWebinar.clickOnFirstWebinar();
    browser.sleep(5000);
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila prva error poruka', function(){
    buyingHostedWebinar.checkFirstErrorMessage();
    browser.sleep(1000);
});

it('Enter numbers in credit card field', function(){
    buyingVideo.enterNumbersInCreditCardField();
    browser.sleep(1000);
});

it('Enter name of credit card field', function(){
    buyingVideo.enterNameOfCreditCard();
    browser.sleep(1000);
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila druga error poruka', function(){
    buyingHostedWebinar.checkSecondErrorMessage();
    browser.sleep(1000);
});

it('Enter numbers in month field', function(){
    buyingHostedWebinar.enterNumbersInMonthField();
    browser.sleep(1000);
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
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

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
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

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
    browser.sleep(1000);
});

it('Provera da li se pojavila error poruka za zip code', function(){
    buyingHostedWebinar.checkErrorMessageForZipCode();
    browser.sleep(1000);
});

it('Enter numbers in zip code field', function(){
    buyingVideo.enterNumbersInZipField();
    browser.sleep(1000);
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
    browser.sleep(4000);
});

it('Provera da li se pojavila "This video has been purchased. message', function(){
    buyingVideo.checkPurchaseMessage();
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