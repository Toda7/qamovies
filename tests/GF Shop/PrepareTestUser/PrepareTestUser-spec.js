var PrepareTestUser = require('./PrepareTestUser-po.js');

describe('Prepare Test User', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Prvi korak', function(){
        PrepareTestUser.prvaFunkcija();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});