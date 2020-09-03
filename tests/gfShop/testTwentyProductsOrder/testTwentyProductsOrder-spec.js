var testTwentyProductsOrder = require('./testTwentyProductsOrder-po.js');

describe('Twenty Product Order', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    // it('Dolazak na product 1', function () {
    //     testTwentyProductsOrder.landOnProduct1();
    //     browser.sleep(2000);
    // });

    // it('Dodaj prvi proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 2', function () {
    //     testTwentyProductsOrder.landOnProduct2();
    //     browser.sleep(2000);
    // });

    // it('Dodaj drugi proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 3', function () {
    //     testTwentyProductsOrder.landOnProduct3();
    //     browser.sleep(2000);
    // });

    // it('Dodaj treci proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 4', function () {
    //     testTwentyProductsOrder.landOnProduct4();
    //     browser.sleep(2000);
    // });

    // it('Dodaj cetvrti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 5', function () {
    //     testTwentyProductsOrder.landOnProduct5();
    //     browser.sleep(2000);
    // });
    
    // it('Dodaj peti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 6', function () {
    //     testTwentyProductsOrder.landOnProduct6();
    //     browser.sleep(2000);
    // });

    // it('Dodaj sesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 7', function () {
    //     testTwentyProductsOrder.landOnProduct7();
    //     browser.sleep(2000);
    // });

    // it('Dodaj sedmi proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 8', function () {
    //     testTwentyProductsOrder.landOnProduct8();
    //     browser.sleep(2000);
    // });

    // it('Dodaj osmi proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 9', function () {
    //     testTwentyProductsOrder.landOnProduct9();
    //     browser.sleep(2000);
    // });

    // it('Dodaj deveti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 10', function () {
    //     testTwentyProductsOrder.landOnProduct10();
    //     browser.sleep(2000);
    // });

    // it('Dodaj deseti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 11', function () {
    //     testTwentyProductsOrder.landOnProduct11();
    //     browser.sleep(2000);
    // });

    // it('Dodaj jedanaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 12', function () {
    //     testTwentyProductsOrder.landOnProduct12();
    //     browser.sleep(2000);
    // });

    // it('Dodaj Dvanaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 13', function () {
    //     testTwentyProductsOrder.landOnProduct13();
    //     browser.sleep(2000);
    // });

    // it('Dodaj trinaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 14', function () {
    //     testTwentyProductsOrder.landOnProduct14();
    //     browser.sleep(2000);
    // });

    // it('Dodaj cetrnaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 15', function () {
    //     testTwentyProductsOrder.landOnProduct15();
    //     browser.sleep(2000);
    // });

    // it('Dodaj petnaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 16', function () {
    //     testTwentyProductsOrder.landOnProduct16();
    //     browser.sleep(2000);
    // });

    // it('Dodaj sesnaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 17', function () {
    //     testTwentyProductsOrder.landOnProduct17();
    //     browser.sleep(2000);
    // });

    // it('Dodaj sedamnaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    // it('Dolazak na product 18', function () {
    //     testTwentyProductsOrder.landOnProduct18();
    //     browser.sleep(2000);
    // });

    // it('Dodaj osamnaesti proizvod u korpu', function () {
    //     testTwentyProductsOrder.addToCart();
    //     browser.sleep(2000);
    // });

    it('Dolazak na product 19', function () {
        testTwentyProductsOrder.landOnProduct19();
        browser.sleep(2000);
    });

    it('Izaberi opciju 1 iz dropa', function () {
        testTwentyProductsOrder.chooseOption1ForProduct19();
        browser.sleep(2000);
    });

    it('Dodaj devetnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(2000);
    });

    it('Izaberi opciju 2 iz dropa', function () {
        testTwentyProductsOrder.chooseOption2ForProduct19();
        browser.sleep(2000);
    });

    it('Dodaj dvadeseti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(2000);
    });

    it('Izaberi opciju 3 iz dropa', function () {
        testTwentyProductsOrder.chooseOption3ForProduct19();
        browser.sleep(2000);
    });

    it('Dodaj dvadesetprvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(2000);
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
        browser.sleep(2000);
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
        browser.sleep(2000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(2000);
    });

    // Nema vise paginacije u View and Edit Carts strani
    // it('Klik na next arrow u paginaciji', function () {
    //     testTwentyProductsOrder.clickNextArrowInPagination();
    //     browser.sleep(2000);
    // });

    // it('Provera da li je dobra paginacija', function () {
    //     testTwentyProductsOrder.checkSuccess1();
    //     browser.sleep(2000);
    // });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(2000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(2000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(2000);
    });

    // it('Dolazak na Success page', function landOnSuccessPage(){
    //     browser.get('https://shop.outfitterextreme.com/truglo/checkout/onepage/success/'); 
    //     
    // });

    it('Klik na avatar u hederu', function () {
        testTwentyProductsOrder.clickAvatarInHeader();
        browser.sleep(2000);
    });

    it('Klik na My Account', function () {
        testTwentyProductsOrder.clickMyAccount();
        browser.sleep(2000);
    });

    it('Klik na View Order link', function () {
        testTwentyProductsOrder.clickViewOrder();
        browser.sleep(2000);
    });

    it('Klik na next arrow u paginaciji', function () {
        testTwentyProductsOrder.clickNextArrowInPagination();
        browser.sleep(2000);
    });

    it('Provera da li je dobra paginacija', function () {
        testTwentyProductsOrder.checkSuccess1();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});