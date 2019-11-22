var ra_home = require('../ra_home/ra_home-po');
var ra_go_to_legacy_app = require('./ra_go_to_legacy_app-po');


describe('Odlazak na legacy app sa RA home premium page', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

it('Dolazak na home risk assesment premium stranu', function(){
    ra_home.landOnRaHome();
});

it('Provera da li se ucitao home URL sa IDem od premium accounta', function(){
    ra_home.checkRaHomeURL();
});

it('Click on "Click here to go to legacy app." link', function(){
    ra_go_to_legacy_app.clickOnLink();
});

it('Provera da li se ucitao RA Legacy App URL', function(){
    ra_go_to_legacy_app.checkRaLegacyAppURL();
});

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});