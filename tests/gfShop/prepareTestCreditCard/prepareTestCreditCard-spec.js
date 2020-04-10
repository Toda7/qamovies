var prepareTestCreditCard = require('./prepareTestCreditCard-po.js');

describe('Prepare Credit card user', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product details page in shop', function(){
        prepareTestCreditCard.landOnAplsHomePage();
    });

    it('Klik na add to cart button', function(){
        prepareTestCreditCard.clickOnAddToCart();
    });

    it('Klik to open credit cart', function(){
        prepareTestCreditCard.clickToOpenCart();
    });

    it('Klik to go to checkout page', function(){
        prepareTestCreditCard.clickToGoToCheckoutPage();
    });

    it('Klik on Next button', function(){
        prepareTestCreditCard.clickOnNextButton();
    });

    it('Klik on credit cart to open drop ', function(){
        prepareTestCreditCard.clickOnCreditCartToOpenDrop();
    });

    it('Klik to add new card', function(){
        prepareTestCreditCard.clickToAddNewCard();
    });

    it('Unosenje numbers credit card', function(){
        prepareTestCreditCard.enterNumbersCreditCard();
    });

    it('Klik to open month drop', function(){
        prepareTestCreditCard.clickToOpenMonth();
    });

    it('Biranje meseca', function(){
        prepareTestCreditCard.selectMonth();
    });

    it('Klik to open year drop', function(){
        prepareTestCreditCard.clickToOpenYear();
    });

    it('Selektovanje godine', function(){
        prepareTestCreditCard.selectYear();
    });
    
    it('Unosenje cvv numbers', function(){
        prepareTestCreditCard.enterCvvNumber();
    });
    
    it('Klik on PLACE ORDER button', function(){
        prepareTestCreditCard.clickOnPlaceOrder();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});