var rundeckReindex = require('./rundeckReindex-po.js');

describe('Rundeck ES Reindex', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Rundeck Log In stranu', function(){
        rundeckReindex.landOnRundeckLogInPage();
    });

    it('Unosenje Usernamea', function(){
        rundeckReindex.enterUsername();
    });

    it('Unosenje Passworda', function(){
        rundeckReindex.enterPassword();
    });

    it('Klik na Log In dugme', function(){
        rundeckReindex.clickLogInButton();
    });

    it('Dolazak na Rundeck ES Reindex stranu', function(){
        rundeckReindex.landOnEsReindexPage();
    });

    it('Klik na Threads iz Drop Menija', function(){
        rundeckReindex.clickThreadsFromDropMenu();
    });

    it('Klik na Run Job Now dugme', function(){
        rundeckReindex.clickRunJobNowButton();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
