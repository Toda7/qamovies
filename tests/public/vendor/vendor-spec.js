var register = require('../registracija/registracija-po');
var vendor = require('./vendor-po')
var lendwell = require('../lendwell/lendwell-po');


describe('Public vendor strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Vendor link iz headera', function(){
        vendor.clickOnVendor();
    });

    it('Provera da li se ucitao view_finder url', function(){
        vendor.checkVendorUrl();
    });

    it('Provera da li se ucitao CBANC Sales & Marketing Solutions box', function(){
        vendor.checkCBANCbox();
    });

    it('Provera da li se ucitao Get Started Today button', function(){
        vendor.checkButton();
    });

    it('Provera da li se ucitao footer', function(){
        vendor.checkFooter();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao intercom', function(){
        lendwell.checkIntercom();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});