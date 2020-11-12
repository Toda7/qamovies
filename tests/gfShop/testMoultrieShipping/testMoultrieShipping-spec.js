var testMoultrieShipping = require('./testMoultrieShipping-po.js');

describe('Provera cene shipping-a za odredjene proizvode', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Moultrie shop', function(){
        testMoultrieShipping.landOnMoultrieHomePage();
        browser.sleep(5000);
    });

    it('Dolazak na detail stranu kamere', function(){
        testMoultrieShipping.landOnCameraDetailPage();
        browser.sleep(5000);
    });

    it('Klik na add to cart button', function(){
        testMoultrieShipping.clickOnAddToCart();
        browser.sleep(5000);
    });

    it('Dolazak na detail stranu feeder-a', function(){
        testMoultrieShipping.landOnFeederDetailPage();
        browser.sleep(5000);
    });

    it('Klik na add to cart button', function(){
        testMoultrieShipping.clickOnAddToCart();
        browser.sleep(5000);
    });

    it('Dolazak na detail stranu Attractant-a', function(){
        testMoultrieShipping.landOnAttractantsDetailPage();
        browser.sleep(5000);
    });

    it('Klik na add to cart button', function(){
        testMoultrieShipping.clickOnAddToCart();
        browser.sleep(5000);
    });

    it('Klik to open cart', function(){
        testMoultrieShipping.clickToOpenCart();
        browser.sleep(5000);
    });

    it('Klik to go to checkout page', function(){
        testMoultrieShipping.clickToGoToCheckoutPage();
        browser.sleep(5000);
    });

    it('Provera da li je shipping $27,00', function(){
        testMoultrieShipping.checkShippingPrice();
        browser.sleep(5000);
    });

    it('Klik to go to Review & Payments page', function(){
        testMoultrieShipping.clickOnNext();
        browser.sleep(5000);
    });

    it('Klik on PLACE ORDER button', function(){
        testMoultrieShipping.clickOnPlaceOrder();
        browser.sleep(5000);
    });

    it('Dolazak na My Orders stranu', function(){
        testMoultrieShipping.landOnMyOrdersPage();
        browser.sleep(5000);
    });

    it('Klik na prvi View Order link', function(){
        testMoultrieShipping.clickFirstViewOrderLink();
        browser.sleep(5000);
    });

    it('Provera da li je shipping $27,00 na My Orders', function(){
        testMoultrieShipping.checkShippingPrice2();
        browser.sleep(1000);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});