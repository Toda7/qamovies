var register = require('../registracija/registracija-po');
var lendwell = require('../lendwell/lendwell-po');
var ra = require('./ra-po')

describe('Risk assessment strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });
    it('Hover to open on drop menu', function(){
        lendwell.HoverToOpenDrop();
    });  

    it('Klik na RA link', function(){
        ra.clickOnLink();
    });  

    it('Provera RA URL-a', function(){
        ra.checkRaUrl();
    });  
    it('Provera da li se ucitao page title', function(){
        ra.checkRaPageTitle();
    });
    it('Provera da li se ucitao title on page', function(){
        ra.checkTitleOnPage();
    });
    it('Provera da li se ucitao box for help', function(){
        ra.checkHelpBox();
    });
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
