var buyingVideo = require('../buyingVideo/buyingVideo-po.js');
var buyingHostedWebinar = require('../buyingHostedWebinar/buyingHostedWebinar-po.js');
var usingInvoiceOutsourced = require('../usingInvoiceOutsourced/usingInvoiceOutsourced-po.js');
var usingInvoiceVideo = require('./usingInvoiceVideo-po.js');
var usingInvoiceHosted = require('../usingInvoiceHosted/usingInvoiceHosted-po.js');


describe('Using invoice in buying video ', function(){

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

it('Click on invoice link', function(){
    usingInvoiceOutsourced.clickOnInvoiceLink();
});

it('Klik on Agree & Pay button', function(){
    usingInvoiceVideo.clickOnAgreePayButton();
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

it('Provera da li se pojavila This webinar has been purchased. message', function(){
    buyingVideo.checkPurchaseMessage();
});

it('Hover To Open User Drop', function(){
    usingInvoiceHosted.HoverToOpenUserDrop();
});

it('Klik on SingOut', function(){
    usingInvoiceHosted.clickOnSignOutLink();
});

it('Klik on SinIn', function(){
    usingInvoiceHosted.clickOnSignIn();
});

it('Enter email', function(){
    usingInvoiceHosted.enterEmail();
});

it('Enter password', function(){
    usingInvoiceHosted.enterPass();
});

it('Klik na Submit', function(){
    usingInvoiceHosted.submit();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[0]);
    });
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});