var prepareReturnPolicy = require('./prepareReturnPolicy-po.js');


describe('Prepare Return policy in cockpit', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na MDP - da bi nas redirektovao na sign in formu', function(){
        prepareReturnPolicy.landOnMdpAsUser();
    });

    it('Klik on click On Continue With Email', function(){
        prepareReturnPolicy.clickOnContinueWithEmail();
    });

    it('Unosenje admin email', function(){
        prepareReturnPolicy.enterEmail();
    });

    it('Unosenje admin email', function(){
        prepareReturnPolicy.enterPass();
    });

    it('Klik on Sign in', function(){
        prepareReturnPolicy.submit();
    });

    it('Dolazak u Cockpit na Settings za GOP useress', function(){
        prepareReturnPolicy.landOnSettingsPageInCockpit();
        browser.sleep(3000);
    });

    it('Unosenje nas text u return policy polje u cockpitu', function(){
        prepareReturnPolicy.enterOurReturnPolicy();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});