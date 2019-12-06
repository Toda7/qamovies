var testTwentyProductsOrder = require('./testTwentyProductsOrder-po.js');

describe('Twenty Product Order', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na prvi proizvod', function () {
        testTwentyProductsOrder.click1stProduct();
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na drugi proizvod', function () {
        testTwentyProductsOrder.click2ndProduct();
    });

    it('Dodaj drugi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na Treci proizvod', function () {
        testTwentyProductsOrder.click3rdProduct();
    });

    it('Dodaj treci proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na Cetvrti proizvod', function () {
        testTwentyProductsOrder.click4thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj cetvrti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na Peti proizvod', function () {
        testTwentyProductsOrder.click5thProduct();
    });

    it('Dodaj peti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na Sesti proizvod', function () {
        testTwentyProductsOrder.click6thProduct();
    });

    it('Dodaj sesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na Sedmi proizvod', function () {
        testTwentyProductsOrder.click7thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj sedmi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na osmi proizvod', function () {
        testTwentyProductsOrder.click8thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj osmi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na deveti proizvod', function () {
        testTwentyProductsOrder.click9thProduct();
    });

    it('Dodaj deveti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na next arrow u paginaciji', function () {
        testTwentyProductsOrder.clickNextArrowInPagination();
    });

    it('Klik na Deseti proizvod', function () {
        testTwentyProductsOrder.click10thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj deseti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Jedanaesti proizvod', function () {
        testTwentyProductsOrder.click11thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj jedanaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Dvanaesti proizvod', function () {
        testTwentyProductsOrder.click12thProduct();
    });

    it('Dodaj Dvanaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Trinaesti proizvod', function () {
        testTwentyProductsOrder.click13thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj trinaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Cetrnaesti proizvod', function () {
        testTwentyProductsOrder.click14thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj cetrnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Petnaesti proizvod', function () {
        testTwentyProductsOrder.click15thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj petnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Sesnaesti proizvod', function () {
        testTwentyProductsOrder.click16thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj sesnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Sedamnaesti proizvod', function () {
        testTwentyProductsOrder.click17thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj sedamnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Osamnaesti proizvod', function () {
        testTwentyProductsOrder.click18thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj osamnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Devetnaesti proizvod', function () {
        testTwentyProductsOrder.click19thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj devetnaesti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na drugu Archery stranu', function () {
        testTwentyProductsOrder.landOnSecondArcheryPage();
    });

    it('Klik na Dvadeseti proizvod', function () {
        testTwentyProductsOrder.click20thProduct();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Dodaj dvadeseti proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Klik na Firearm Hunting Link', function () {
        testTwentyProductsOrder.clickFirearmHuntingLink();
    });

    it('Klik na Dvadeset Prvi proizvod', function () {
        testTwentyProductsOrder.click21stProduct();
    });

    it('Izaberi opciju iz dropa 414', function () {
        testTwentyProductsOrder.chooseOption414();
    });

    it('Dodaj dvadeset prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
    });

    it('Klik na next arrow u paginaciji', function () {
        testTwentyProductsOrder.clickNextArrowInPagination();
    });

    it('Provera da li je dobra paginacija', function () {
        testTwentyProductsOrder.checkSuccess1();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
    });

    // it('Dolazak na Success page', function landOnSuccessPage(){
    //     browser.get('https://shop.outfitterextreme.com/truglo/checkout/onepage/success/'); 
    //     browser.sleep(2000);
    // });

    it('Klik na avatar u hederu', function () {
        testTwentyProductsOrder.clickAvatarInHeader();
    });

    it('Klik na My Account', function () {
        testTwentyProductsOrder.clickMyAccount();
    });

    it('Klik na View Order link', function () {
        testTwentyProductsOrder.clickViewOrder();
    });

    it('Klik na next arrow u paginaciji', function () {
        testTwentyProductsOrder.clickNextArrowInPagination();
    });

    it('Provera da li je dobra paginacija', function () {
        testTwentyProductsOrder.checkSuccess1();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});