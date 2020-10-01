var staticTrainingCcbp = require('./staticTrainingCcbp-po.js');
var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po.js');

describe('Certified Cannabis Banking Professional strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Certified Cannabis Banking Professional stranu', function(){
        staticTrainingCcbp.landOnTrainingCcbpPage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao page title', function(){
        staticTrainingCcbp.checkTrainingCcbpPageTitle();
    });

    it('Provera glavnog titla na strani', function(){
        staticTrainingCcbp.checkTitleOnPage();
    });

    it('Provera prvog texta texta na strani', function(){
        staticTrainingCcbp.checkFirstTextOnPage();
    });

    it('Provera da li je dobra hero image', function(){
        staticTrainingCcbp.checkHeroImageLogo();
    });

    it('Provera cele Benefits: sekcije i poslednjeg buttna na strani', function(){
        staticTrainingCcbp.checkBenefitsTitleOnPage();
    });

    it('Provera da li se ucitao intercom', function(){
        staticAdvertiseGetStarted.checkIntercom();
    });





    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
    });