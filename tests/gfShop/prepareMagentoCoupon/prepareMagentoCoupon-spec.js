var prepareMagentoCoupon = require('./prepareMagentoCoupon-po.js');

describe('Prepare Test User', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
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

    it('Dolazak na Cart Price Rules page', function(){
        prepareMagentoCoupon.LandOnCartPriceRulesPage();
    });

    it('Klik na Add New Rule dugme', function(){
        prepareMagentoCoupon.clickOnAddNewRule();
    });

    it('Unesi ime pravila', function(){
        prepareMagentoCoupon.enterRuleName();
    });

    it('Unesi Description', function(){
        prepareMagentoCoupon.enterDescription();
    });

    it('Odaberi shop', function(){
        prepareMagentoCoupon.selectShop();
    });

    it('Odaberi grupu', function(){
        prepareMagentoCoupon.selectGroup();
    });

    it('Specific Coupon', function(){
        prepareMagentoCoupon.specificCoupon();
    });

    it('Unesi kupon kod', function(){
        prepareMagentoCoupon.couponCode();
    });

    it('Odaberi From datum', function(){
        prepareMagentoCoupon.selectFromDate();
    });

    it('Klik na Go Today dugme', function(){
        prepareMagentoCoupon.clickGoToday();
    });

    it('Klik na Close dugme', function(){
        prepareMagentoCoupon.clickClose();
    });

    it('Odaberi To datum', function(){
        prepareMagentoCoupon.enterToDate();
    });

    it('Klik na Actions', function(){
        prepareMagentoCoupon.clickActions();
    });

    it('Odaberi iz Free Shipping drop menija', function(){
        prepareMagentoCoupon.freeShippingDrop();
    });

    it('Klik na Save dugme', function(){
        prepareMagentoCoupon.clickSave();
    });

    // it('Provera da li je uspesno napravljen kupon', function(){
    //     prepareMagentoCoupon.checkSuccess();
    // });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});