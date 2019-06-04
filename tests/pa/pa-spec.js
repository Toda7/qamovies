var register = require('../registracija/registracija-po');
var lendwell = require('../lendwell/lendwell-po');
var home = require('../home/home-po');

var pa = require('./pa-po')

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
    }); 

    it('Provera da li se ucitao intercom', function(){
        home.checkIntercom();
    });
    
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
