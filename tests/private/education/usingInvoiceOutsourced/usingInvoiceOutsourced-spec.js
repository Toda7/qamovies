var buyingHostedWebinar = require('../buyingHostedWebinar/buyingHostedWebinar-po.js');
var usingInvoiceOutsourced = require('./usingInvoiceOutsourced-po.js');
var usingInvoiceHosted = require('../usingInvoiceHosted/usingInvoiceHosted-po.js');


describe('Using invoice for buying outsourced webinar', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    
    it('Dolazak na webinras stranu', function(){
        buyingHostedWebinar.landOnEducationPage();
    });
    
    it('Unosenje texta u search polje', function(){
        usingInvoiceOutsourced.enterTextInSearchField();
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

    it('Click on invoice link', function(){
        usingInvoiceOutsourced.clickOnInvoiceLink();
    });

    it('Klik on Agree & Pay button', function(){
        buyingHostedWebinar.clickOnAgreePayButton();
    });

    it('Dolazak na webinras stranu', function(){
        buyingHostedWebinar.landOnEducationPage();
    });
    
    it('Unosenje texta u search polje', function(){
        usingInvoiceOutsourced.enterTextInSearchField();
    });
    
    it('Klik on search option', function(){
        buyingHostedWebinar.clickOnSearchOption();
    });
    
    it('Klik on first webinar on the list of search', function(){
        buyingHostedWebinar.clickOnFirstWebinar();
    });

    it('Provera da li se pojavila This webinar has been purchased. message', function(){
        usingInvoiceOutsourced.checkPurchaseMessage();
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
    