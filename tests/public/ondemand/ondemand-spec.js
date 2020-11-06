var register = require('../registracija/registracija-po.js');
var upcoming = require('../upcoming/upcoming-po.js');
var ondemand = require('./ondemand-po.js');

describe('Provera On Demand strane', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
        browser.sleep(4000);
    });

    it('Hoverujem Education link za drop', function(){
        upcoming.HoverToOpenDrop();
        browser.sleep(1000);
    });

    it('Click na Ondemand link', function(){
        ondemand.clickOnLink();
        browser.sleep(5000);
    });

    it('Check On demand URL', function(){
        ondemand.checkOnDemand();
        browser.sleep(1000);
    });

    it('Check On Demand Title', function(){
        ondemand.checkOnDemandWebinarsPageTitle();
        browser.sleep(1000);
    });

    it('Provera Title na strani', function(){
        ondemand.checkTitleOnPage();
        browser.sleep(1000);
    });   


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});