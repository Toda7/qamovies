var prepareTestCreditCard = require('./prepareTestCreditCard-po.js');

describe('Prepare Credit card user', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product details page in shop', function(){
        prepareTestCreditCard.landOnAplsHomePage();
        browser.sleep(7000);
    });

    it('Klik na add to cart button', function(){
        prepareTestCreditCard.clickOnAddToCart();
        browser.sleep(5000);
    });

    it('Klik to open credit cart', function(){
        prepareTestCreditCard.clickToOpenCart();
        browser.sleep(2000);
    });

    it('Klik to go to checkout page', function(){
        prepareTestCreditCard.clickToGoToCheckoutPage();
        browser.sleep(5000);
    });

    it('Klik on Next button', function(){
        prepareTestCreditCard.clickOnNextButton();
        browser.sleep(7000);
    });

    it('Klik on credit cart to open drop ', function(){
        prepareTestCreditCard.clickOnCreditCartToOpenDrop();
        browser.sleep(4000);
    });

    it('Klik to add new card', function(){
        prepareTestCreditCard.clickToAddNewCard();
        browser.sleep(2000);
    });

    it('Unosenje numbers credit card', function(){
        prepareTestCreditCard.enterNumbersCreditCard();
        browser.sleep(2000);
    });

    it('Klik to open month drop', function(){
        prepareTestCreditCard.clickToOpenMonth();
        browser.sleep(2000);
    });

    it('Biranje meseca', function(){
        prepareTestCreditCard.selectMonth();
        browser.sleep(2000);
    });

    it('Klik to open year drop', function(){
        prepareTestCreditCard.clickToOpenYear();
        browser.sleep(2000);
    });

    it('Selektovanje godine', function(){
        prepareTestCreditCard.selectYear();
        browser.sleep(2000);
    });
    
    it('Unosenje cvv numbers', function(){
        prepareTestCreditCard.enterCvvNumber();
        browser.sleep(2000);
    });
    
    it('Klik on PLACE ORDER button', function(){
        prepareTestCreditCard.clickOnPlaceOrder();
        browser.sleep(6000);
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});