var dashVendors = require('./dashVendors-po')

describe('Vendors Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashVendors.landOnHomePage();
    });

    it('Klik na Vendors link u footeru', function(){
        dashVendors.clickOnVendors();
    });

    it('Provera View Finder marketing URL-a', function(){
        dashVendors.checkVendorsUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});