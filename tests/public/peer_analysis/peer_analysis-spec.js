var register = require('../registracija/registracija-po');
var lendwell = require('../lendwell/lendwell-po');
var lendwell = require('../lendwell/lendwell-po');
var pa = require('./peer_analysis-po');

describe('Peer analysis strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hover to open on drop menu', function(){
        lendwell.HoverToOpenDrop();
    });  

    it('Klik na PA link iz drop menu', function(){
        pa.clickOnLink();
    });  

    it('Provera PA URL-a', function(){
        pa.checkPaUrl();
    });  

    it('Provera da li se ucitao page title', function(){
        pa.checkRAPageTitle();
    });  

    it('Provera da li se ucitao title on page', function(){
        pa.checkTitleOnPage();
    });  

    it('Provera da li se ucitao button', function(){
        pa.chechButton();
    }); 

    it('Provera da li se ucitala premium ad', function(){
        pa.checkAdOnPage();
        browser.sleep(4000);
    }); 

    it('Provera da li se ucitao intercom', function(){
        lendwell.checkIntercom();
    });
    
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
