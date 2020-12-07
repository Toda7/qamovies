var prepareReturnPolicy = require('./prepareReturnPolicy-po.js');


describe('Prepare Return policy in cockpit', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na MDP - da bi nas redirektovao na sign in formu', function(){
        prepareReturnPolicy.landOnMdpAsUser();
        browser.sleep(4000);
    });

    it('Klik on click On Continue With Email', function(){
        prepareReturnPolicy.clickOnContinueWithEmail();
        browser.sleep(4000);
    });

    it('Unosenje admin email', function(){
        prepareReturnPolicy.enterEmail();
        browser.sleep(4000);
    });

    it('Unosenje admin email', function(){
        prepareReturnPolicy.enterPass();
        browser.sleep(4000);
    });

    it('Klik on Sign in', function(){
        prepareReturnPolicy.submit();
        browser.sleep(4000);
    });

    it('Dolazak u Cockpit na Settings za GOP useress', function(){
        prepareReturnPolicy.landOnSettingsPageInCockpit();
        browser.sleep(9000);
    });

    it('Unosenje nas text u return policy polje u cockpitu', function(){
        prepareReturnPolicy.enterOurReturnPolicy();
        browser.sleep(6000);
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});