var register = require('../registracija/registracija-po');
var lendwell = require('./lendwell-po');

describe('Klik na lendwell link iz drop meni', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });  

    it('Hover to open on drop menu', function(){
        lendwell.HoverToOpenDrop();
    });  

    it('Klik na lendwell link iz drop menu', function(){
        lendwell.clickOnLink();
    }); 
    it('Provera lendwell URL-a', function(){
        lendwell.checkLendwell();
    }); 
    it('Provera da li se ucitao page title', function(){
        lendwell.checkLendwellPageTitle();
    });
    it('Provera da li se ucitala forma', function(){
        lendwell.checkForm();
    });
    it('Provera da li se ucitao Integrated Products and Services box', function(){
        lendwell.checkPSbox();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});