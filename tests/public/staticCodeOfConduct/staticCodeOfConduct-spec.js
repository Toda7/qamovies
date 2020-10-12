var staticCodeOfConduct = require('../staticCodeOfConduct/staticCodeOfConduct-po.js');
var register = require('../registracija/registracija-po.js');


describe('Public "Code of Conduct" strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });


    it('Klik na Code of Conduct u footeru', function(){
        staticCodeOfConduct.clickOnCode();
       browser.sleep(5000);
    });

    it('Provera Code of Conduct URL-a', function(){
        staticCodeOfConduct.checkCodeURL();
    });

    it('Cekiranje texta', function(){
        staticCodeOfConduct.checkText1();
       browser.sleep(3000);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});