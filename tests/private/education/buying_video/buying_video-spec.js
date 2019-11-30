var buying_video = require('./buying_video-po.js');
var buying_hosted_webinar = require('../buying_hosted_webinar/buying_hosted_webinar-po.js');

describe('Buying video ', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buying_video.landOnVideoPage();
});

it('Unosenje texta u search polje', function(){
    buying_video.enterTextInSearchField();
});

it('Klik on search option', function(){
    buying_hosted_webinar.clickOnSearchOption();
});

it('Klik on first video on the list of search', function(){
    buying_hosted_webinar.clickOnFirstWebinar();
});

it('Klik on agree and pay button', function(){
    buying_video.clickOnAgreePayButton();
});

it('Provera da li se pojavila prva error poruka', function(){
    buying_hosted_webinar.checkFirstErrorMessage();
});

it('Enter numbers in credit card field', function(){
    buying_video.enterNumbersInCreditCardField();
});

it('Enter name of credit card field', function(){
    buying_video.enterNameOfCreditCard();
});

it('Klik on agree and pay button', function(){
    buying_video.clickOnAgreePayButton();
});

it('Provera da li se pojavila druga error poruka', function(){
    buying_hosted_webinar.checkSecondErrorMessage();
});

it('Enter numbers in month field', function(){
    buying_hosted_webinar.enterNumbersInMonthField();
});

it('Klik on agree and pay button', function(){
    buying_video.clickOnAgreePayButton();
});

it('Provera da li se pojavila treca error poruka', function(){
    buying_hosted_webinar.checkThirdErrorMessage();
});

it('Enter numbers in year field', function(){
    buying_hosted_webinar.enterNumbersInYearField();
});

it('Klik on agree and pay button', function(){
    buying_video.clickOnAgreePayButton();
});

it('Provera da li se pojavila cetvrta error poruka', function(){
    buying_hosted_webinar.checkFourthErrorMessage();
});

it('Enter numbers in CVC field', function(){
    buying_hosted_webinar.enterNumbersInCVCField();
});

it('Klik on agree and pay button', function(){
    buying_video.clickOnAgreePayButton();
});

it('Provera da li se pojavila error poruka za zip code', function(){
    buying_hosted_webinar.checkErrorMessageForZipCode();
});

it('Enter numbers in zip code field', function(){
    buying_video.enterNumbersInZipField();
});

it('Klik on agree and pay button', function(){
    buying_video.clickOnAgreePayButton();
    browser.sleep(2000);
});

it('Provera da li se pojavila "This video has been purchased. message', function(){
    buying_video.checkPurchaseMessage();
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