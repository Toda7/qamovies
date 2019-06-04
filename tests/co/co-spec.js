var register = require('../registracija/registracija-po');
var lendwell = require('../lendwell/lendwell-po');
var home = require('../home/home-po');
var co = require('./co-po')

describe('Public cielostar strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hover to open on drop menu', function(){
        lendwell.HoverToOpenDrop();
    });  

    it('Klik na CO link', function(){
        co.clickOnLink();
    });

    it('Provera cielostar URL-a', function(){
        co.checkCoUrl();
    });

    it('Provera da li se ucitao page title', function(){
        co.checkCoPageTitle();
    });

    it('Provera da li se ucitao Introducing title on page', function(){
        co.checkTitleOnPage();
    });

    it('Provera da li se ucitala forma', function(){
        co.checkForm();
    });

    it('Provera da li se ucitao footer', function(){
        lendwell.checkFooter();
    });

    it('Provera da li se ucitao intercom', function(){
        home.checkIntercom();
    });
    
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});