var prepareProductsForTest = require('./prepareProductsForTest-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');



describe('Add products to stock', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    // proizvod 1 
    it('Dolazak na product 1 u magento', function () {
        prepareProductsForTest.landProduct1DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 16 je parent product
    // it('Dolazak na product 16 u magento', function () {
    //     prepareProductsForTest.landProduct16DetailsPage();
    //     browser.sleep(5000);
    //     browser.executeScript('window.scrollTo(0,0);');
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    //     prepareProductsForTest.checkSaveButton();
    //     browser.sleep(5000);
    // });

    // it('Klik na switch', function () {
    //     prepareProductsForTest.clickSwitch();
    //     browser.sleep(5000);
    // });

    // it('Unosenje numbers u qty polje', function () {
    //     prepareProductsForTest.enterNumbersOfQTY();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function () {
    //     prepareProductsForTest.selectInStock();
    //     browser.sleep(2000);
    // });

    // it('Klik na Save button', function () {
    //     prepareProductsForTest.clickOnSave();
    //     browser.sleep(5000);
    // });

    // it('Provera success poruke', function () {
    //     prepareProductsForTest.checkSuccessMessage();
    // });

    // proizvod 17
    it('Dolazak na product 17 u magento', function () {
        prepareProductsForTest.landProduct17DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 24 je parent product
    // it('Dolazak na product 24 u magento', function () {
    //     prepareProductsForTest.landProduct24DetailsPage();
    //     browser.sleep(5000);
    //     browser.executeScript('window.scrollTo(0,0);');
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    //     prepareProductsForTest.checkSaveButton();
    //     browser.sleep(5000);
    // });

    // it('Klik na switch', function () {
    //     prepareProductsForTest.clickSwitch();
    //     browser.sleep(5000);
    // });

    // it('Unosenje numbers u qty polje', function () {
    //     prepareProductsForTest.enterNumbersOfQTY();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function () {
    //     prepareProductsForTest.selectInStock();
    //     browser.sleep(2000);
    // });

    // it('Klik na Save button', function () {
    //     prepareProductsForTest.clickOnSave();
    //     browser.sleep(5000);
    // });

    // it('Provera success poruke', function () {
    //     prepareProductsForTest.checkSuccessMessage();
    // });

    // proizvod 25
    it('Dolazak na product 25 u magento', function () {
        prepareProductsForTest.landProduct25DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Dolazak na Magento log in page', function(){
        prepareMagentoCoupon.LandOnLogInPage();
    });

    it('Unesi Username', function(){
        prepareMagentoCoupon.enterUsername();
    });

    it('Unesi Password', function(){
        prepareMagentoCoupon.enterPass();
    });

    it('Klik na Sign In dugme', function(){
        prepareMagentoCoupon.clickOnSignIn();
    });

    // proizvod 28 je parent product
    it('Dolazak na product 28 u magento', function () {
        prepareProductsForTest.landProduct28DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik on Advanced Inventory', function () {
        prepareProductsForTest.clickOnAdvancedInventoryLink();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        prepareProductsForTest.enterNumbersOfQTYForParrent();
        browser.sleep(3000);
    });

    it('Klik na DONE button', function () {
        prepareProductsForTest.clickOnDoneButton();
        browser.sleep(5000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(6000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 30 je parent product
    // it('Dolazak na product 30 u magento', function () {
    //     prepareProductsForTest.landProduct30DetailsPage();
    //     browser.sleep(5000);
    //     browser.executeScript('window.scrollTo(0,0);');
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    //     prepareProductsForTest.checkSaveButton();
    //     browser.sleep(5000);
    // });

    // it('Klik na switch', function () {
    //     prepareProductsForTest.clickSwitch();
    //     browser.sleep(5000);
    // });

    // it('Unosenje numbers u qty polje', function () {
    //     prepareProductsForTest.enterNumbersOfQTY();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function () {
    //     prepareProductsForTest.selectInStock();
    //     browser.sleep(2000);
    // });

    // it('Klik na Save button', function () {
    //     prepareProductsForTest.clickOnSave();
    //     browser.sleep(5000);
    // });

    // it('Provera success poruke', function () {
    //     prepareProductsForTest.checkSuccessMessage();
    // });

    // proizvod 31
    it('Dolazak na product 31 u magento', function () {
        prepareProductsForTest.landProduct31DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 35 je parent product
    // it('Dolazak na product 35 u magento', function () {
    //     prepareProductsForTest.landProduct35DetailsPage();
    //     browser.sleep(5000);
    //     browser.executeScript('window.scrollTo(0,0);');
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    //     prepareProductsForTest.checkSaveButton();
    //     browser.sleep(5000);
    // });

    // it('Klik na switch', function () {
    //     prepareProductsForTest.clickSwitch();
    //     browser.sleep(5000);
    // });

    // it('Unosenje numbers u qty polje', function () {
    //     prepareProductsForTest.enterNumbersOfQTY();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function () {
    //     prepareProductsForTest.selectInStock();
    //     browser.sleep(2000);
    // });

    // it('Klik na Save button', function () {
    //     prepareProductsForTest.clickOnSave();
    //     browser.sleep(5000);
    // });

    // it('Provera success poruke', function () {
    //     prepareProductsForTest.checkSuccessMessage();
    // });

     // proizvod 36
     it('Dolazak na product 36 u magento', function () {
        prepareProductsForTest.landProduct36DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

     // proizvod 42 je parent brend
    //  it('Dolazak na product 42 u magento', function () {
    //     prepareProductsForTest.landProduct42DetailsPage();
    //     browser.sleep(5000);
    //     browser.executeScript('window.scrollTo(0,0);');
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    //     prepareProductsForTest.checkSaveButton();
    //     browser.sleep(5000);
    // });

    // it('Klik na switch', function () {
    //     prepareProductsForTest.clickSwitch();
    //     browser.sleep(5000);
    // });

    // it('Unosenje numbers u qty polje', function () {
    //     prepareProductsForTest.enterNumbersOfQTY();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function () {
    //     prepareProductsForTest.selectInStock();
    //     browser.sleep(2000);
    // });

    // it('Klik na Save button', function () {
    //     prepareProductsForTest.clickOnSave();
    //     browser.sleep(5000);
    // });

    // it('Provera success poruke', function () {
    //     prepareProductsForTest.checkSuccessMessage();
    // });

     // proizvod 43
     it('Dolazak na product 43 u magento', function () {
        prepareProductsForTest.landProduct43DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 61
    it('Dolazak na product 61 u magento', function () {
        prepareProductsForTest.landProduct61DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 62
    it('Dolazak na product 62 u magento', function () {
        prepareProductsForTest.landProduct62DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 63
    it('Dolazak na product 63 u magento', function () {
        prepareProductsForTest.landProduct63DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 64
    it('Dolazak na product 64 u magento', function () {
        prepareProductsForTest.landProduct64DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 65
    it('Dolazak na product 65 u magento', function () {
        prepareProductsForTest.landProduct65DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 66
    it('Dolazak na product 66 u magento', function () {
        prepareProductsForTest.landProduct66DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 67
    it('Dolazak na product 67 u magento', function () {
        prepareProductsForTest.landProduct67DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 68
    it('Dolazak na product 68 u magento', function () {
        prepareProductsForTest.landProduct68DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 69
    it('Dolazak na product 69 u magento', function () {
        prepareProductsForTest.landProduct69DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 70
    it('Dolazak na product 70 u magento', function () {
        prepareProductsForTest.landProduct70DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 71
    it('Dolazak na product 71 u magento', function () {
        prepareProductsForTest.landProduct71DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

    // proizvod 72
    it('Dolazak na product 72 u magento', function () {
        prepareProductsForTest.landProduct72DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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

// proizvod 73
    it('Dolazak na PARENT product 73 u magento ', function () {
        prepareProductsForTest.landProduct72DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
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

    // proizvod 74
    it('Dolazak na product 74 u magento ', function () {
        prepareProductsForTest.landProduct74DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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



// proizvod 75
it('Dolazak na PARENT product 75 u magento ', function () {
    prepareProductsForTest.landProduct75DetailsPage();
    browser.sleep(5000);
    browser.executeScript('window.scrollTo(0,0);');
    browser.sleep(1000);
});

it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    prepareProductsForTest.checkSaveButton();
    browser.sleep(5000);
});

it('Klik na switch', function () {
    prepareProductsForTest.clickSwitch();
    browser.sleep(5000);
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

// proizvod 76
it('Dolazak na product 76 u magento ', function () {
    prepareProductsForTest.landProduct76DetailsPage();
    browser.sleep(5000);
    browser.executeScript('window.scrollTo(0,0);');
    browser.sleep(1000);
});

it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
    prepareProductsForTest.checkSaveButton();
    browser.sleep(5000);
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




    // proizvod 77
    it('Dolazak na product 77 u magento ', function () {
        prepareProductsForTest.landProduct77DetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
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