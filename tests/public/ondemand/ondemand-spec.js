var register = require('../registracija/registracija-po.js');
var upcoming = require('../upcoming/upcoming-po.js');
var ondemand = require('./ondemand-po.js');

describe('Provera On Demand strane', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hoverujem Education link za drop', function(){
        upcoming.HoverToOpenDrop();
    });

    it('Click na Ondemand link', function(){
        ondemand.clickOnLink();
    });

    it('Check On demand URL', function(){
        ondemand.checkOnDemand();
    });

    it('Check On Demand Title', function(){
        ondemand.checkOnDemandWebinarsPageTitle();
    });

    it('Provera Title na strani', function(){
        ondemand.checkTitleOnPage();
    });   


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});