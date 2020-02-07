var logInAsUser = require('./logInAsUser-po.js');

describe('Log in as Bradly Seales', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home page', function(){
        logInAsUser.landOnMdpPage();
    });

    it('Klik na Contine with email button', function(){
        logInAsUser.clickOnSignIn();
    });

    it('Unosenje user email', function(){
        logInAsUser.enterEmail();
    });

    it('Unosenje user passworda', function(){
        logInAsUser.enterPass();
    });

    it('Klik on Sign in button', function(){
        logInAsUser.submit();
        browser.sleep(3000);
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});