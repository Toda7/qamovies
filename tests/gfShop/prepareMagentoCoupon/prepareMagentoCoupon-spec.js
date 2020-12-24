var prepareMagentoCoupon = require('./prepareMagentoCoupon-po.js');

describe('Prepare Maghento coupon', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Magento log in page', function(){
        prepareMagentoCoupon.LandOnLogInPage();
        browser.sleep(5000);
    });

    it('Unesi Username', function(){
        prepareMagentoCoupon.enterUsername();
        browser.sleep(3000);
    });

    it('Unesi Password', function(){
        prepareMagentoCoupon.enterPass();
        browser.sleep(3000);
    });

    it('Klik na Sign In dugme', function(){
        prepareMagentoCoupon.clickOnSignIn();
        browser.sleep(5000);
    });

    it('Dolazak na Cart Price Rules page', function(){
        prepareMagentoCoupon.LandOnCartPriceRulesPage();
        browser.sleep(5000);
    });

    it('Klik na Add New Rule dugme', function(){
        prepareMagentoCoupon.clickOnAddNewRule();
        browser.sleep(5000);
    });

    it('Unesi ime pravila', function(){
        prepareMagentoCoupon.enterRuleName();
        browser.sleep(3000);
    });

    it('Unesi Description', function(){
        prepareMagentoCoupon.enterDescription();
        browser.sleep(3000);
    });

    // it('Odaberi shop', function(){
    //     prepareMagentoCoupon.selectShop();
    // });

    it('Odaberi sve shopove', function(){
        prepareMagentoCoupon.selectAllShops();
        browser.sleep(3000);
    });

    it('Odaberi grupu', function(){
        prepareMagentoCoupon.selectGroup();
        browser.sleep(3000);
    });

    it('Specific Coupon', function(){
        prepareMagentoCoupon.specificCoupon();
        browser.sleep(3000);
    });

    it('Unesi kupon kod', function(){
        prepareMagentoCoupon.couponCode();
        browser.sleep(3000);
    });

    it('Odaberi From datum', function(){
        prepareMagentoCoupon.selectFromDate();
        browser.sleep(3000);
    });

    it('Klik na Go Today dugme', function(){
        prepareMagentoCoupon.clickGoToday();
        browser.sleep(3000);
    });

    it('Klik na Close dugme', function(){
        prepareMagentoCoupon.clickClose();
        browser.sleep(3000);
    });

    it('Odaberi To datum', function(){
        prepareMagentoCoupon.enterToDate();
        browser.sleep(3000);
    });

    it('Klik na Actions', function(){
        prepareMagentoCoupon.clickActions();
        browser.sleep(3000);
    });

    it('Odaberi iz Free Shipping drop menija', function(){
        prepareMagentoCoupon.freeShippingDrop();
        browser.sleep(3000);
    });

    it('Klik na Save dugme', function(){
        prepareMagentoCoupon.clickSave();
        browser.sleep(8000);
    });

    // it('Provera da li je uspesno napravljen kupon', function(){
    //     prepareMagentoCoupon.checkSuccess();
    // });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});