var register = require ('../registracija/registracija-po.js');
var footContact = require ('./footContact-po');

describe('Public Contact link iz Footera', function(){

    beforeAll(function() {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Contact link', function(){
        footContact.clickOnLink();
    });

    it('Provera Contact URL-a', function(){
        footContact.checkContactURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true);
    });
});

