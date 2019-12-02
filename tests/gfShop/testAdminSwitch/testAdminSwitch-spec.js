var testAdminSwitch = require('./testAdminSwitch-po.js');
var prepareReturnPolicy = require('../prepareReturnPolicy/prepareReturnPolicy-po.js');
var prepareTestUser = require('../prepareTestUser/prepareTestUser-po.js');
var testReturnPolicy = require('../testReturnPolicy/testReturnPolicy-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');


describe('Provera da li se pojavio switch za admina', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na MDP', function(){
        prepareReturnPolicy.landOnMdpAsUser();
    });

    it('Klik on avatar to open user menu', function(){
        prepareTestUser.clickOnAvatarToOpenDropMenu();
    });

    it('Klik on Sign Out link', function(){
        prepareTestUser.clickOnSignOut();
    });

    it('Dolazak na MDP', function(){
        prepareReturnPolicy.landOnMdpAsUser();
    });

    it('Klik on click On Continue With Email', function(){
        prepareReturnPolicy.clickOnContinueWithEmail();
    });

    it('Unosenje admin email', function(){
        testAdminSwitch.enterEmail();
    });

    it('Unosenje admin pass', function(){
        testAdminSwitch.enterPass();
    });

    it('Klik on Sign in', function(){
        prepareReturnPolicy.submit();
    });

    it('Dolazak na shop home page', function(){
        testReturnPolicy.landOnTrugloPage();
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
    });

    it('Provera da li se ucitao FIREARM-HUNTING URL', function(){
        testSortingByName.checkFireamHuntingURL();
    });

    it('Provera cene za prvi prozivod na strani', function(){
        testAdminSwitch.checkPrice();
    });

    it('Klik na admin switch and select GOP', function(){
        testAdminSwitch.clickOnAdminGroupToSelectGOP();
    });

    it('Provera cene za prvi prozivod na strani nakon koriscenja GOP switcha', function(){
        testAdminSwitch.checkPriceAfterUsedSwitch();
    });

    it('Klik na admin switch and select GOP', function(){
        testAdminSwitch.clickOnAdminGroupToSelectGOP();
    });

    it('Provera cene za prvi prozivod na strani nakon koriscenja GOP switcha', function(){
        testAdminSwitch.checkPriceAfterUsedSwitch();
    });

    it('Dolazak na MDP', function(){
        prepareReturnPolicy.landOnMdpAsUser();
    });

    it('Klik on avatar to open user menu', function(){
        prepareTestUser.clickOnAvatarToOpenDropMenu();
    });

    it('Klik on Sign Out link', function(){
        prepareTestUser.clickOnSignOut();
    });

    it('Dolazak na MDP', function(){
        prepareReturnPolicy.landOnMdpAsUser();
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