var prepareTestUser = require('./prepareTestUser-po.js');

describe('Prepare Test User', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Users account page on MDP', function(){
        prepareTestUser.landOnAccountUsersPage();
        browser.sleep(2000);
    });

    it('Klik on Choose Password button', function(){
        prepareTestUser.clickOnChoosePasswordButton();
    });

    it('Unosenje nove sifre za usera', function(){
        prepareTestUser.enterNewPass();
        browser.sleep(2000);
    });

    it('Unosenje confirm password', function(){
        prepareTestUser.enterNewPass2();
        browser.sleep(2000);
    });

    it('Klik on Change Password button', function(){
        prepareTestUser.clickToSave();
    });

    it('Idemo opet direktno na link kako si se strana refreshovala', function(){
        prepareTestUser.RefreshPage();
    });

    it('Klik on avatar to open user menu', function(){
        prepareTestUser.clickOnAvatarToOpenDropMenu();
    });

    it('Klik on Sign Out link', function(){
        prepareTestUser.clickOnSignOut();
    });

    it('Logovanje sa userom da bi potvrdili da li smo promenili sifru', function(){
        prepareTestUser.landOnMdpAsUser();
    });

    it('Klik on click On Continue With Email', function(){
        prepareTestUser.clickOnContinueWithEmail();
    });

    it('Unosenje users email', function(){
        prepareTestUser.enterUserEmail();
    });

    it('Unosenje users email', function(){
        prepareTestUser.enterUserPass();
    });

    it('Klik on Sign in', function(){
        prepareTestUser.submit1();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});