var register = require('../registracija/registracija-po.js');
var upcoming = require('../upcoming/upcoming-po.js');
var accessplus = require('./accessplus-po.js');

describe('Upcoming webinars strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hoverujem Education link za drop', function(){
        upcoming.HoverToOpenDrop();
    });

    it('Click na All Access Plus link', function(){
        accessplus.clickOnLink();
    });

    it('Check Access Plus URL', function(){
        accessplus.checkAccessPlus();
    });

    it('Check Access Plus Title', function(){
        accessplus.checkAccessPlusPageTitle();
    });

    it('Provera Title na strani', function(){
        accessplus.checkTitleOnPage();
    });








    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
    });