var register = require('../registracija/registracija-po');
var lendwell = require('../lendwell/lendwell-po');
var home = require('../home/home-po');
var vm = require('./vm-po')

describe('Public vendor management strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });
    
    it('Hover to open on drop menu', function(){
        lendwell.HoverToOpenDrop();
    });  

    it('Klik na VM link', function(){
        vm.clickOnLink();
    });

    it('Provera VM URL-a', function(){
        vm.checkVmUrl();
    }); 

    it('Provera da li se ucitao page title', function(){
        vm.checkVMPageTitle();
    });

    it('Provera da li se ucitao demo button', function(){
        vm.checkDemoButton();
    });

    it('Provera da li se ucitala Premium ad', function(){
        vm.checkPremiumAd();
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

