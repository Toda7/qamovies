var buyingVideo = require('./buyingVideo-po.js');
var buyingHostedWebinar = require('../buyingHostedWebinar/buyingHostedWebinar-po.js');

describe('Buying video ', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buyingVideo.landOnVideoPage();
});

it('Unosenje texta u search polje', function(){
    buyingVideo.enterTextInSearchField();
});

it('Klik on search option', function(){
    buyingHostedWebinar.clickOnSearchOption();
});

it('Klik on first video on the list of search', function(){
    buyingHostedWebinar.clickOnFirstWebinar();
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
});

it('Provera da li se pojavila prva error poruka', function(){
    buyingHostedWebinar.checkFirstErrorMessage();
});

it('Enter numbers in credit card field', function(){
    buyingVideo.enterNumbersInCreditCardField();
});

it('Enter name of credit card field', function(){
    buyingVideo.enterNameOfCreditCard();
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
});

it('Provera da li se pojavila druga error poruka', function(){
    buyingHostedWebinar.checkSecondErrorMessage();
});

it('Enter numbers in month field', function(){
    buyingHostedWebinar.enterNumbersInMonthField();
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
});

it('Provera da li se pojavila treca error poruka', function(){
    buyingHostedWebinar.checkThirdErrorMessage();
});

it('Enter numbers in year field', function(){
    buyingHostedWebinar.enterNumbersInYearField();
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
});

it('Provera da li se pojavila cetvrta error poruka', function(){
    buyingHostedWebinar.checkFourthErrorMessage();
});

it('Enter numbers in CVC field', function(){
    buyingHostedWebinar.enterNumbersInCVCField();
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
});

it('Provera da li se pojavila error poruka za zip code', function(){
    buyingHostedWebinar.checkErrorMessageForZipCode();
});

it('Enter numbers in zip code field', function(){
    buyingVideo.enterNumbersInZipField();
});

it('Klik on agree and pay button', function(){
    buyingVideo.clickOnAgreePayButton();
    browser.sleep(2000);
});

it('Provera da li se pojavila "This video has been purchased. message', function(){
    buyingVideo.checkPurchaseMessage();
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