var prepareTestUser = require('./prepareTestUser-po.js');

describe('Prepare Test Users', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Bradly Seales user account page on MDP', function(){
        prepareTestUser.landOnBradlySealesAccountUsersPage();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za scrollovanje na strani', function(){
        prepareTestUser.scrollPage();
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

    it('Dolazak na Brent Snyder user account page on MDP', function(){
        prepareTestUser.landOnBrentSnyderAccountUsersPage();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za scrollovanje na strani', function(){
        prepareTestUser.scrollPage();
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

    it('Logovanje sa drugim userom da bi potvrdili da li smo promenili sifru', function(){
        prepareTestUser.landOnMdpAsSecondUser();
    });

    it('Klik on click On Continue With Email', function(){
        prepareTestUser.clickOnContinueWithEmail();
    });

    it('Unosenje users email', function(){
        prepareTestUser.enterSecondUserEmail();
    });

    it('Unosenje users email', function(){
        prepareTestUser.enterUserPass();
    });

    it('Klik on Sign in', function(){
        prepareTestUser.submit1();
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

    it('Logovanje sa prvim userom da bi potvrdili da li smo promenili sifru', function(){
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