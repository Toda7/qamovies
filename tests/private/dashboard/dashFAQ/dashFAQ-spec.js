var dashFAQ = require('./dashFAQ-po')

describe('FAQ Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashFAQ.landOnHomePage();
    });

    it('Klik na FAQ link u footeru', function(){
        dashFAQ.clickOnFAQ();
    });

    it('Provera FAQ URL-a i zatvaranje taba', function () {
        browser.sleep(10000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            dashFAQ.checkFAQUrl();
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});