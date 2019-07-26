var buying_hosted_webinar = require('../buying_hosted_webinar/buying_hosted_webinar-po.js');
var using_invoice_hosted = require('./using_invoice_hosted-po.js');

describe('Using invoice in buying hosted webinar', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buying_hosted_webinar.landOnEducationPage();
});

it('Unosenje texta u search polje', function(){
    buying_hosted_webinar.enterTextInSearchField();
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

it('Click on invoice link', function(){
    using_invoice_hosted.clickOnInvoiceLink();
});

it('Klik on Agree & Pay button', function(){
    buying_hosted_webinar.clickOnAgreePayButton();
});

it('Dolazak na webinras stranu', function(){
    buying_hosted_webinar.landOnEducationPage();
});

it('Unosenje texta u search polje', function(){
    buying_hosted_webinar.enterTextInSearchField();
});

it('Klik on search option', function(){
    buying_hosted_webinar.clickOnSearchOption();
});

it('Klik on first webinar on the list of search', function(){
    buying_hosted_webinar.clickOnFirstWebinar();
});

it('Provera da li se pojavila This webinar has been purchased. message', function(){
    using_invoice_hosted.checkPurchaseMessage();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});