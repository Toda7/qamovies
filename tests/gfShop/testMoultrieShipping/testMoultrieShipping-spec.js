var testMoultrieShipping = require('./testMoultrieShipping-po.js.js');

describe('Provera cene shipping-a za odredjene proizvode', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Moultrie shop', function(){
        testMoultrieShipping.landOnMoultrieHomePage();
    });

    it('Dolazak na detail stranu kamere', function(){
        testMoultrieShipping.landOnCameraDetailPage();
    });

    it('Klik na add to cart button', function(){
        testMoultrieShipping.clickOnAddToCart();
    });

    it('Dolazak na detail stranu feeder-a', function(){
        testMoultrieShipping.landOnFeederDetailPage();
    });

    it('Klik na add to cart button', function(){
        testMoultrieShipping.clickOnAddToCart();
    });

    it('Dolazak na detail stranu Attractant-a', function(){
        testMoultrieShipping.landOnAttractantsDetailPage();
    });

    it('Klik na add to cart button', function(){
        testMoultrieShipping.clickOnAddToCart();
    });

    it('Klik to open cart', function(){
        testMoultrieShipping.clickToOpenCart();
    });

    it('Klik to go to checkout page', function(){
        testMoultrieShipping.clickToGoToCheckoutPage();
    });

    it('Provera da li je shipping $27,00', function(){
        testMoultrieShipping.checkShippingPrice();
    });

    it('Klik to go to Review & Payments page', function(){
        testMoultrieShipping.clickOnNext();
    });

    it('Klik on PLACE ORDER button', function(){
        testMoultrieShipping.clickOnPlaceOrder();
    });

    it('Dolazak na My Orders stranu', function(){
        testMoultrieShipping.landOnMyOrdersPage();
    });

    it('Klik na prvi View Order link', function(){
        testMoultrieShipping.clickFirstViewOrderLink();
    });

    it('Provera da li je shipping $27,00 na My Orders', function(){
        testMoultrieShipping.checkShippingPrice2();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});