var searchVendors = require('./searchVendors-po.js');

describe('Vendors search', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Vendor Directory stranu', function(){
        searchVendors.landOnVendorDirectory();
    });

    it('Klikni na Search Vendors polje', function(){
        searchVendors.clickOnSearchVendorsField();
    });

    it('Unesi text u search polje', function(){
        searchVendors.enterSearchWord();
    });

    it('Provera Searcha', function(){
        searchVendors.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});