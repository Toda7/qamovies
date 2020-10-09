var staticCxo = require('./staticCxo-po.js')

describe('CXO strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na CXO stranu', function(){
        staticCxo.landOnCxoPage();
        browser.sleep(3000)
    });

    it('Otvori Intercom', function(){
        staticCxo.openIntercom();
        browser.sleep(1000)
    });

    it('Zatvori Intercom', function(){
        staticCxo.closeIntercom();
        browser.sleep(1000)
    });

    it('Provera da li se ucitao text u Hero sekciji', function(){
        staticCxo.checkHeroText();
        browser.sleep(500)
    });

    it('Provera placeholdera u input polju', function(){
        staticCxo.checkInputPlaceholder();
        browser.sleep(500)
    });

    it('Provera texta u cta dugmetu', function(){
        staticCxo.checkCtaButtonText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u levoj sekciji', function(){
        staticCxo.checkLeftSectionText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u desnoj sekciji', function(){
        staticCxo.checkRighSectionText();
        browser.sleep(500)
    });

    it('Dolazak na Home page', function(){
        staticCxo.landOnHomePage();
        browser.sleep(1000)
    });   

    it('Klik na Sign In dugme', function(){
        staticCxo.clickOnSignIn();
        browser.sleep(2000)
    });   

    it('Unesi 1@chicago.com email adresu', function(){
        staticCxo.enterEmail();
        browser.sleep(500)
    });   

    it('Unesi password', function(){
        staticCxo.enterPass();
        browser.sleep(500)
    }); 

    it('Klik na Log In dugme', function(){
        staticCxo.submit();
        browser.sleep(1000)
    }); 

    it('Dolazak na CXO stranu', function(){
        staticCxo.landOnCxoPage();
        browser.sleep(2000)
    });

    it('Provera texta u email input polju', function(){
        staticCxo.checkInputFieldValue();
        browser.sleep(500)
    }); 

    it('Klik na CTA dugme', function(){
        staticCxo.clickCtaButton();
        browser.sleep(4000)
    }); 

    it('Provera Thank You texta', function(){
        staticCxo.checkThankYouText();
        browser.sleep(500)
    }); 

    it('Klik na User meni', function () {
        staticCxo.clickOnUserMenu();
        browser.sleep(500)
    });

    it('Klik na Sign Out', function () {
        staticCxo.clickOnSignOut();
        browser.sleep(1500)
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});