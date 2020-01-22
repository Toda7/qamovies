var register = require('../registracija/registracija-po.js');
var upcoming = require('../upcoming/upcoming-po.js');
var reserveseat = require('./reserveseat-po.js');

describe('Kupovina webinara preko invoice', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hoverujem Education link za drop', function(){
        upcoming.HoverToOpenDrop();
    });

    it('Click na Upcoming link', function(){
        upcoming.clickOnLink();
    });

    it('Click na Webinar Karticu', function(){
        reserveseat.clickOnWebinarCard();
        browser.sleep(2000);
    });

    it('Click na Reserve Button Link', function(){
        reserveseat.clickOnReserveButton();
        browser.sleep(2000);
    });

    it('Unosenje Imena', function(){
        reserveseat.addFirstName();
    });

    it('Unosenje Prezimena', function(){
        reserveseat.addLastName();
    });

    it('Unosenje Emaila', function(){
        reserveseat.addEmail();
        browser.sleep(2000);
    });

    it('Dodavanje Atendija', function(){
        reserveseat.clickOnAddAttendee();
        browser.sleep(2000);
    });

    it('Unosenje Receipt Emaila', function(){
        reserveseat.addReceiptEmail();
        browser.sleep(2000);
    });

    it('Rezervisanje Mesta za Webinar', function(){
        reserveseat.clickOnReserveMySpot();
        browser.sleep(3000);
    });

    it('Click na Invoice Link', function(){
        reserveseat.clickOnInvoice();
    });

    it('Unosenje Invoice Emaila', function(){
        reserveseat.addInvoiceEmail();
        browser.sleep(2000);
    });

    it('Click na Agree and Pay button', function(){
        reserveseat.clickOnAgreeButton();
        browser.sleep(3000);
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});