var raHome = require('../raHome/raHome-po');
var raGoToLegacyApp = require('./raGoToLegacyApp-po');


describe('Odlazak na legacy app sa RA home premium page', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    raHome.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    raHome.checkRaHomeURL();
});

it('Click on "Click here to go to legacy app." link', function(){
    raGoToLegacyApp.clickOnLink();
});

it('Provera da li se ucitao RA Legacy App URL', function(){
    raGoToLegacyApp.checkRaLegacyAppURL();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});