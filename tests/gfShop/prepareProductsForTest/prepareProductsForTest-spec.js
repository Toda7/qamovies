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

    // proizvod 16
    it('Dolazak na product 16 u magento', function () {
        prepareProductsForTest.landProduct16DetailsPage();
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

    // proizvod 17
    it('Dolazak na product 17 u magento', function () {
        prepareProductsForTest.landProduct17DetailsPage();
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

    // proizvod 18
    it('Dolazak na product 18 u magento', function () {
        prepareProductsForTest.landProduct18DetailsPage();
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

    // proizvod 19
    it('Dolazak na product 19 u magento', function () {
        prepareProductsForTest.landProduct19DetailsPage();
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

    // proizvod 20
    it('Dolazak na product 20 u magento', function () {
        prepareProductsForTest.landProduct20DetailsPage();
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

    // proizvod 21
    it('Dolazak na product 21 u magento', function () {
        prepareProductsForTest.landProduct21DetailsPage();
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

    // proizvod 22
    it('Dolazak na product 22 u magento', function () {
        prepareProductsForTest.landProduct22DetailsPage();
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

    // proizvod 23
    it('Dolazak na product 23 u magento', function () {
        prepareProductsForTest.landProduct23DetailsPage();
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

    // proizvod 24
    it('Dolazak na product 24 u magento', function () {
        prepareProductsForTest.landProduct24DetailsPage();
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

    // proizvod 25
    it('Dolazak na product 25 u magento', function () {
        prepareProductsForTest.landProduct25DetailsPage();
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

    // proizvod 26
    it('Dolazak na product 26 u magento', function () {
        prepareProductsForTest.landProduct26DetailsPage();
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

    // proizvod 27
    it('Dolazak na product 27 u magento', function () {
        prepareProductsForTest.landProduct27DetailsPage();
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

    // proizvod 28
    it('Dolazak na product 28 u magento', function () {
        prepareProductsForTest.landProduct28DetailsPage();
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

    // proizvod 29
    it('Dolazak na product 29 u magento', function () {
        prepareProductsForTest.landProduct29DetailsPage();
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

    // proizvod 30
    it('Dolazak na product 30 u magento', function () {
        prepareProductsForTest.landProduct30DetailsPage();
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

    // proizvod 31
    it('Dolazak na product 31 u magento', function () {
        prepareProductsForTest.landProduct31DetailsPage();
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

    // proizvod 32
    it('Dolazak na product 32 u magento', function () {
        prepareProductsForTest.landProduct32DetailsPage();
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

    // proizvod 33
    it('Dolazak na product 33 u magento', function () {
        prepareProductsForTest.landProduct33DetailsPage();
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

    // proizvod 34
    it('Dolazak na product 34 u magento', function () {
        prepareProductsForTest.landProduct34DetailsPage();
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

    // proizvod 35
    it('Dolazak na product 35 u magento', function () {
        prepareProductsForTest.landProduct35DetailsPage();
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

     // proizvod 36
     it('Dolazak na product 36 u magento', function () {
        prepareProductsForTest.landProduct36DetailsPage();
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

     // proizvod 37
     it('Dolazak na product 37 u magento', function () {
        prepareProductsForTest.landProduct37DetailsPage();
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

    // proizvod 38
    it('Dolazak na product 38 u magento', function () {
        prepareProductsForTest.landProduct38DetailsPage();
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

    // proizvod 39
    it('Dolazak na product 39 u magento', function () {
        prepareProductsForTest.landProduct39DetailsPage();
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

      // proizvod 40
      it('Dolazak na product 40 u magento', function () {
        prepareProductsForTest.landProduct40DetailsPage();
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

     // proizvod 41
     it('Dolazak na product 41 u magento', function () {
        prepareProductsForTest.landProduct41DetailsPage();
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

     // proizvod 42
     it('Dolazak na product 42 u magento', function () {
        prepareProductsForTest.landProduct42DetailsPage();
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

     // proizvod 43
     it('Dolazak na product 43 u magento', function () {
        prepareProductsForTest.landProduct43DetailsPage();
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

    // proizvod 44
    it('Dolazak na product 44 u magento', function () {
        prepareProductsForTest.landProduct44DetailsPage();
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

      // proizvod 45
      it('Dolazak na product 45 u magento', function () {
        prepareProductsForTest.landProduct45DetailsPage();
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

     // proizvod 46
     it('Dolazak na product 46 u magento', function () {
        prepareProductsForTest.landProduct46DetailsPage();
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

     // proizvod 47
     it('Dolazak na product 47 u magento', function () {
        prepareProductsForTest.landProduct47DetailsPage();
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

    // proizvod 48
    it('Dolazak na product 48 u magento', function () {
        prepareProductsForTest.landProduct48DetailsPage();
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

    // proizvod 49
    it('Dolazak na product 49 u magento', function () {
        prepareProductsForTest.landProduct49DetailsPage();
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

    // proizvod 50
    it('Dolazak na product 50 u magento', function () {
        prepareProductsForTest.landProduct50DetailsPage();
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

    // proizvod 51
    it('Dolazak na product 51 u magento', function () {
        prepareProductsForTest.landProduct51DetailsPage();
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

    // proizvod 52
    it('Dolazak na product 52 u magento', function () {
        prepareProductsForTest.landProduct52DetailsPage();
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

    // proizvod 53
    it('Dolazak na product 53 u magento', function () {
        prepareProductsForTest.landProduct53DetailsPage();
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

    // proizvod 54
    it('Dolazak na product 54 u magento', function () {
        prepareProductsForTest.landProduct54DetailsPage();
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

    // proizvod 55
    it('Dolazak na product 55 u magento', function () {
        prepareProductsForTest.landProduct55DetailsPage();
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

    // proizvod 56
    it('Dolazak na product 56 u magento', function () {
        prepareProductsForTest.landProduct56DetailsPage();
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

    // proizvod 57
    it('Dolazak na product 57 u magento', function () {
        prepareProductsForTest.landProduct57DetailsPage();
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

    // proizvod 58
    it('Dolazak na product 58 u magento', function () {
        prepareProductsForTest.landProduct58DetailsPage();
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

    // proizvod 59
    it('Dolazak na product 59 u magento', function () {
        prepareProductsForTest.landProduct59DetailsPage();
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

    // proizvod 60
    it('Dolazak na product 60 u magento', function () {
        prepareProductsForTest.landProduct60DetailsPage();
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