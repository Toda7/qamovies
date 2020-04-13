var prepareTestCreditCardMagento = require('./prepareTestCreditCardMagento-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');


describe('Prepare Credit card in Magento', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    // it('Dolazak na Magento log in page', function(){
    //     prepareMagentoCoupon.LandOnLogInPage();
    // });

    // it('Unesi Username', function(){
    //     prepareMagentoCoupon.enterUsername();
    // });

    // it('Unesi Password', function(){
    //     prepareMagentoCoupon.enterPass();
    // });

    // it('Klik na Sign In dugme', function(){
    //     prepareMagentoCoupon.clickOnSignIn();
    // });

    it('Dolazak users magento profile', function(){
        prepareTestCreditCardMagento.landOnMagentoPage();
    });

    it('Klik on Payment Date', function(){
        prepareTestCreditCardMagento.clickOnPaymentData();
    });

    it('Unosenje first name', function(){
        prepareTestCreditCardMagento.enterFirstName();
    });

    it('Enter first name', function(){
        prepareTestCreditCardMagento.enterFirstName();
        browser.sleep(2000);
    });

    it('Enter last name', function(){
        prepareTestCreditCardMagento.enterLastName();
    });

    it('Enter phone number', function(){
        prepareTestCreditCardMagento.enterNumber();
        browser.sleep(2000);
    });

    it('Enter street', function(){
        prepareTestCreditCardMagento.enterStreet();
    });

    it('Enter city', function(){
        prepareTestCreditCardMagento.enterCity();
        browser.sleep(2000);
    });

    it('Click province to get drop', function(){
        prepareTestCreditCardMagento.clickOnProvince();
        browser.sleep(2000);
    });

    it('Enter province', function(){
        prepareTestCreditCardMagento.enterProvince();
    });

    it('Click county to get drop', function(){
        prepareTestCreditCardMagento.clickOnCountry();
        browser.sleep(2000);
    });

    it('Enter county', function(){
        prepareTestCreditCardMagento.enterCountry();
    });

    it('Enter zip', function(){
        prepareTestCreditCardMagento.enterZip();
    });

    // it('Klik on CC type', function(){
    //     prepareTestCreditCardMagento.clickOnCCType();
    //     browser.sleep(2000);
    // });

    // it('Select CC type', function(){
    //     prepareTestCreditCardMagento.selectCcType();
    // });

    it('Enter CC number', function(){
        prepareTestCreditCardMagento.enterCCNumber();
    });

    it('Klik to get drop for mouth', function(){
        prepareTestCreditCardMagento.clickOnMonth();
        browser.sleep(2000);
    });

    it('Select mouth', function(){
        prepareTestCreditCardMagento.selectMonth();
    });

    it('Klik to get drop for year', function(){
        prepareTestCreditCardMagento.clickOnYear();
        browser.sleep(2000);
    });

    it('Select year', function(){
        prepareTestCreditCardMagento.selectYear();
    });

    it('Enter CCV', function(){
        prepareTestCreditCardMagento.enterCCV();
        browser.sleep(2000);
    });

    it('Klik on save button', function(){
        prepareTestCreditCardMagento.clickOnSave();
    });




    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});