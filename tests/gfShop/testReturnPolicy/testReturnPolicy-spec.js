var testReturnPolicy = require('./testReturnPolicy-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');



describe('Test return policy', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na shop home page', function(){
        testReturnPolicy.landOnTrugloPage();
        browser.sleep(6000);
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
        browser.sleep(4000);
    });

    it('Vracanje na home page', function(){
        testReturnPolicy.landOnTrugloPage();
        browser.sleep(5000);
    });

    it('Klik on Return policy link from footer', function(){
        testReturnPolicy.clickOnReturnPolicyLink();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao text iz cockpita u return policy window', function(){
        testReturnPolicy.checkTextInReturnPolicyWindow();
        browser.sleep(1000);
    });

    it('Klik na close button to close the window on home page', function(){
        testReturnPolicy.clickCloseButton();
        browser.sleep(2000);
    });

    it('Dolazak na product page da bi proverili return policy', function(){
        testReturnPolicy.landOnProductPage();
        browser.sleep(5000);
    });

    it('Klik on Return policy link from footer on product page', function(){
        testReturnPolicy.clickOnReturnPolicyLink();
        browser.sleep(5000);
    });

    it('Provera da li se uctao text iz cockpita u return policy window', function(){
        testReturnPolicy.checkTextInReturnPolicyWindow();
        browser.sleep(2000);
    });

    it('Klik na close button to close the window on product page', function(){
        testReturnPolicy.clickCloseButton();
        browser.sleep(2000);
    });

    it('Dolazak na my account page da bi proverili return policy', function(){
        testReturnPolicy.landOnMyAccountPage();
        browser.sleep(5000);
    });

    it('Klik on Return policy link from footer on my account page', function(){
        testReturnPolicy.clickOnReturnPolicyLink();
        browser.sleep(4000);
    });

    it('Provera da li se uctao text iz cockpita u return policy window', function(){
        testReturnPolicy.checkTextInReturnPolicyWindow();
        browser.sleep(2000);
    });

    it('Klik na close button to close the window on product page', function(){
        testReturnPolicy.clickCloseButton();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});