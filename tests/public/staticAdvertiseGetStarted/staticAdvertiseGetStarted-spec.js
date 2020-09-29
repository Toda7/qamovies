var staticAdvertiseGetStarted = require('./staticAdvertiseGetStarted-po.js');

describe('Advertise get-started strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Certified Cannabis Banking Professional stranu', function(){
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(1000);
    });

    // it('Provera da li se ucitao page title', function(){
    //     staticAdvertiseGetStarted.checkAdvertiseGetStartedTitle();
    // });

    it('Provera glavnog titla na strani', function(){
        staticAdvertiseGetStarted.checkTitlesOnPage();
        browser.sleep(500);
    });

    it('Unesi text u first name field', function(){
        staticAdvertiseGetStarted.enterFirstName();
        browser.sleep(500);
    });

    it('Unesi text u last name field', function(){
        staticAdvertiseGetStarted.enterLastName();
        browser.sleep(500);
    });

    it('Unesi text u email field', function(){
        staticAdvertiseGetStarted.enterGmail();
        browser.sleep(500);
    });

    it('Unesi text u company field', function(){
        staticAdvertiseGetStarted.enterCompany();
        browser.sleep(500);
    });

    it('Unesi numbers u phone field', function(){
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
    });