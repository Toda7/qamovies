var staticLwbenefit = require('./staticLwbenefit-po.js');
// var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po.js');
// var login = require('../login/login-po.js');

describe('Lendwell benefit strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Lendwell benefit strana', function(){
        staticLwbenefit.landOnLwbenefit();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function(){
        staticLwbenefit.checkLwbenefitTitleOfPage();
    });

    it('Provera glavnog texta na strani', function(){
        staticLwbenefit.checkHeroTextOnPage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao video', function(){
        staticLwbenefit.checkVideo();
    });

    it('Provera webinar texta ispod videa', function(){
        staticLwbenefit.checkWebinarText();
    });
    
    it('Provera Resources sekcije', function(){
        staticLwbenefit.checkResources();
    });

    it('Klik na SAVE FILE button', function(){
        staticLwbenefit.clickOnDownload();
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
    });

    it('Provera PDF File URL', function(){
        staticLwbenefit.checkPDFFileURL();
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Provera Speakers sekcije', function(){
        staticLwbenefit.checkSpeakers();
    });
    
    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
    });

