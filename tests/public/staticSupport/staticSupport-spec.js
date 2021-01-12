var register = require('../registracija/registracija-po');
var staticSupport = require('../staticSupport/staticSupport-po');

describe('Public "Support" strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    }); 

    it('Klik na Contact u footeru', function(){
       staticSupport.clickOnContact();
       browser.sleep(5000);
    });

    it('Provera Contact URL-a', function(){
        staticSupport.checkContactURL();
    });

    it('cekiranje Page Title', function(){
        staticSupport.checkPageTitle();
        browser.sleep(2000);
     });

     it('Cekiranje Contact Us Title', function(){
        staticSupport.checkContactUsTitle();
        browser.sleep(2000);
     });

     it('Cekiranje Contact Us text', function(){
        staticSupport.checkContactUsText();
        browser.sleep(2000);
     });

     it('Cekiranje text', function(){
        staticSupport.checkText();
        browser.sleep(2000);
     });

     it('Provera da li se ucitoa CBANC logo u headeru ', function(){
        staticSupport.checkCbancLogo();
        browser.sleep(2000);
     });

     it('Cekiranje Office Location text', function(){
        staticSupport.checkAddress();
        browser.sleep(2000);
     });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});