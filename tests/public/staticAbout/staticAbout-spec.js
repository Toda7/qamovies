var staticAbout = require('./staticAbout-po.js')

describe('About strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na About stranu', function(){
        staticAbout.landOnAboutPage();
        browser.sleep(2000)
    });

    it('Provera da li se ucitao About page URL', function(){
        staticAbout.checkAboutURL();
        browser.sleep(500)
    });

    it('Provera da li se ucitao Hero Image text', function(){
        staticAbout.checkHeroImageText();
        browser.sleep(500)
    });

    it('Provera da li se ucitao CBANC logo u Hero Image sekciji', function(){
        staticAbout.checkHeroImageLogo();
        browser.sleep(500)
    });

    it('Provera da li se ucitao text u Middle Section sekciji', function(){
        staticAbout.checkMiddleSectionText();
        browser.sleep(500)
    });

    it('Provera da li se ucitala fotka mape na dnu strane', function(){
        staticAbout.checkMapPhoto();
        browser.sleep(500)
    });

    it('Otvori Intercom', function(){
        staticAbout.openIntercom();
        browser.sleep(1000)
    });

    it('Zatvori Intercom', function(){
        staticAbout.closeIntercom();
        browser.sleep(1000)
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});