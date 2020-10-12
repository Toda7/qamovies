var register = require('../registracija/registracija-po');
var staticTermsOfService = require('../staticTermsOfService/staticTermsOfService-po');


describe('Public "Terms of Service" strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    }); 

    it('Klik na Terms of Service u footeru', function(){
        staticTermsOfService.clickOnTerms();
       browser.sleep(5000);
    });

    it('Otvori intercom', function(){
        staticTermsOfService.openIntercom();
        browser.sleep(2000);
    });

    it('Zatvori intercom', function(){
        staticTermsOfService.closeIntercom();
    });

    it('Provera Terms of Service URL-a', function(){
        staticTermsOfService.checkTermsURL();
    });

    it('Cekiranje texta part 1', function(){
        staticTermsOfService.checkText1();
       browser.sleep(500);
    });

    it('Cekiranje texta part 2', function(){
        staticTermsOfService.checkText2();
       browser.sleep(500);
    });
    
    it('Cekiranje texta part 3', function(){
        staticTermsOfService.checkText3();
       browser.sleep(500);
    });

    it('Cekiranje texta part 4', function(){
        staticTermsOfService.checkText4();
       browser.sleep(500);
    });

    it('Cekiranje texta part 5', function(){
        staticTermsOfService.checkText5();
       browser.sleep(500);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});