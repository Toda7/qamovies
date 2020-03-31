var prepareProductsForTest = require('./prepareProductsForTest-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');
var testAddBillingAddress = require('../testAddBillingAddress/testAddBillingAddress-po.js');


describe('Add to Stock', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak u magento', function () {
        testAddBillingAddress.lendOnMagento();
    });

    it('Unesi Username', function () {
        prepareMagentoCoupon.enterUsername();
    });

    it('Unesi Password', function () {
        prepareMagentoCoupon.enterPass();
    });

    it('Klik na Sign In dugme', function () {
        prepareMagentoCoupon.clickOnSignIn();
    });

    // proizvod 1 
    it('Dolazak na product 1 u magento', function () {
        prepareProductsForTest.landProduct1DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
        browser.sleep(5000);
    });

    // proizvod 2 
    it('Dolazak na product 2 u magento', function () {
        prepareProductsForTest.landProduct2DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 3
    it('Dolazak na product 3 u magento', function () {
        prepareProductsForTest.landProduct3DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
        browser.sleep(5000);
    });

    // proizvod  4 
    it('Dolazak na product 4 u magento', function () {
        prepareProductsForTest.landProduct4DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 5 
    it('Dolazak na product 5 u magento', function () {
        prepareProductsForTest.landProduct5DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 6
    it('Dolazak na product 6 u magento', function () {
        prepareProductsForTest.landProduct6DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 7
    it('Dolazak na product 7 u magento', function () {
        prepareProductsForTest.landProduct7DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 8
    it('Dolazak na product 8 u magento', function () {
        prepareProductsForTest.landProduct8DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 9 
    it('Dolazak na product 9 u magento', function () {
        prepareProductsForTest.landProduct9DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 10
    it('Dolazak na product 10 u magento', function () {
        prepareProductsForTest.landProduct10DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 11
    it('Dolazak na product 11 u magento', function () {
        prepareProductsForTest.landProduct11DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 12
    it('Dolazak na product 12 u magento', function () {
        prepareProductsForTest.landProduct12DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 13
    it('Dolazak na product 13 u magento', function () {
        prepareProductsForTest.landProduct13DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 14
    it('Dolazak na product 14 u magento', function () {
        prepareProductsForTest.landProduct14DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });

    // proizvod 15
    it('Dolazak na product 15 u magento', function () {
        prepareProductsForTest.landProduct15DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
    });




    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});