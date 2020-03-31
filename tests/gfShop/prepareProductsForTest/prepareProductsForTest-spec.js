var prepareProductsForTest = require('./prepareProductsForTest-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');
var testAddBillingAddress = require('../testAddBillingAddress/testAddBillingAddress-po.js');


describe('Add to Stock', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak u magento', function(){
        testAddBillingAddress.lendOnMagento();
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

    it('Dolazak na prvi product u magento', function(){
        prepareProductsForTest.landProductDetailsPage();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Klik switch', function(){
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    // it('Unosenje numbers u qty polje', function(){
    //     prepareProductsForTest.enterNumbersOfQTY();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function(){
    //     prepareProductsForTest.selectInStock();
    //     browser.sleep(2000);
    // });

    // it('Selektovanje In stock option', function(){
    //     prepareProductsForTest.clickToOpenYear();
    //     browser.sleep(5000);
    // });




    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});