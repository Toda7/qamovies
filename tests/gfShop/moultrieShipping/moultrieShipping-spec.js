var moultrie = require('./moultrieShipping-po.js');

describe('Provera cene shipping-a za odredjene proizvode', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Moultrie shop', function(){
        moultrie.landOnMoultrieHomePage();
    });

    it('Dolazak na detail stranu kamere', function(){
        moultrie.landOnCameraDetailPage();
    });

    it('Klik na add to cart button', function(){
        moultrie.clickOnAddToCart();
    });

    it('Dolazak na detail stranu feeder-a', function(){
        moultrie.landOnFeederDetailPage();
    });

    it('Klik na add to cart button', function(){
        moultrie.clickOnAddToCart();
    });

    it('Dolazak na detail stranu Attractant-a', function(){
        moultrie.landOnAttractantsDetailPage();
    });

    it('Klik na add to cart button', function(){
        moultrie.clickOnAddToCart();
    });

    it('Klik to open cart', function(){
        moultrie.clickToOpenCart();
    });

    it('Klik to go to checkout page', function(){
        moultrie.clickToGoToCheckoutPage();
    });

    it('Provera da li je shipping $27,00', function(){
        moultrie.checkShippingPrice();
    });

    it('Klik to go to Review & Payments page', function(){
        moultrie.clickOnNext();
    });

    it('Klik on PLACE ORDER button', function(){
        moultrie.clickOnPlaceOrder();
    });

    it('Dolazak na My Orders stranu', function(){
        moultrie.landOnMyOrdersPage();
    });

    it('Klik na prvi View Order link', function(){
        moultrie.clickFirstViewOrderLink();
    });

    it('Provera da li je shipping $27,00 na My Orders', function(){
        moultrie.checkShippingPrice2();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});