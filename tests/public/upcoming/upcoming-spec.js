var register = require('../registracija/registracija-po.js');
var upcoming = require('./upcoming-po.js');

describe('Provera Upcoming webinars stranae', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hoverujem Education link za drop', function(){
        upcoming.HoverToOpenDrop();
    });

    it('Click na Upcoming link', function(){
        upcoming.clickOnLink();
    });  
    
    it('Check Upcoming URL', function(){
        upcoming.checkUpcoming();
    }); 

    it('Check Upcoming Title', function(){
        upcoming.checkUpcomingWebinarsPageTitle();
    });

    it('Provera Title na strani', function(){
        upcoming.checkTitleOnPage();
    }); 





    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});