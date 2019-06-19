var register = require('../registracija/registracija-po');
var footFAQ = require('./footFAQ-po')

describe('Public FAQ Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na FAQ link', function(){
        footFAQ.clickOnLink();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    });

    it('Provera FAQ URL-a', function(){
        footFAQ.checkFAQURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});