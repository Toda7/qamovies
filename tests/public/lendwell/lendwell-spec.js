var register = require('../registracija/registracija-po');
var lendwell = require('./lendwell-po');


describe('Public lendwell strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });  

    it('Hover to open drop menu', function(){
        lendwell.HoverToOpenDrop();
    });  

    it('Klik na lendwell link iz drop menu', function(){
        lendwell.clickOnLink();
    }); 

    it('Provera lendwell URL-a', function(){
        lendwell.checkLendwell();
        browser.sleep(3000);
    }); 

    it('Provera da li se ucitao page title', function(){
        lendwell.checkLendwellPageTitle();
    });

    it('Provera da li se ucitala forma na strani', function(){
        lendwell.checkForm();
    });
    
    it('Provera da li se ucitao Integrated Products and Services box', function(){
        lendwell.checkPSbox();
    });

    it('Provera da li se ucitao footer', function(){
        lendwell.checkFooter();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao intercom', function(){
        lendwell.checkIntercom();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});