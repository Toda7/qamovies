var register = require('../registracija/registracija-po.js');
var upcoming = require('../upcoming/upcoming-po.js');
var orders = require('./orders-po.js');

describe('Provera Orders strane', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Hoverujem Education link za drop', function(){
        upcoming.HoverToOpenDrop();
    });

    it('Click na Orders link', function(){
        orders.clickOnLink();
    });

    it('Check Orders URL', function(){
        orders.checkOrders();
    });

    it('Check Orders Title', function(){
        orders.checkOrdersPageTitle();
    });

    it('Provera Title na strani', function(){
        orders.checkTitleOnPage();
    });




    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
    });