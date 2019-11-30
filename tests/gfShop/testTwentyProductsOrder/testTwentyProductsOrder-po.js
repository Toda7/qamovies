function landOnArcheryPage() {
   // Dolazak na Archery page 
   browser.get('https://shop.outfitterextreme.com/truglo/archery.html');
   browser.sleep(2000);
}

function click1stProduct() {
   // Klik na prvi proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(0).click();
   browser.sleep(2000);
}

function addToCart() {
   // Dodaj proizvod u korpu
   element(by.buttonText('Add to Cart')).click();
   browser.sleep(2000);
}

function click2ndProduct() {
   // Klik na drugi proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(1).click();
   browser.sleep(2000);
}

function click3rdProduct() {
   // Klik na Treci proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(2).click();
   browser.sleep(2000);
}

function click4thProduct() {
   // Klik na Cetvrti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(5).click();
   browser.sleep(2000);
}

function chooseOption() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[412]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function click5thProduct() {
   // Klik na Peti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(6).click();
   browser.sleep(2000);
}

function click6thProduct() {
   // Klik na Sesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(7).click();
   browser.sleep(2000);
}

function click7thProduct() {
   // Klik na Sedmi proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(8).click();
   browser.sleep(2000);
}

function chooseOption() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[412]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function click8thProduct() {
   // Klik na Osmi proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(10).click();
   browser.sleep(2000);
}

function chooseOption() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[412]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function click9thProduct() {
   // Klik na Deveti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(11).click();
   browser.sleep(2000);
}

function clickNextArrowInPagination() {
   // Klik na next arrow u paginaciji
   element.all(by.className('action  next')).get(1).click();
   browser.sleep(2000);
}

function click10thProduct() {
   // Klik na Deseti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(0).click();
   browser.sleep(2000);
}

function landOnSecondArcheryPage() {
   // Dolazak na drugu Archery stranu 
   browser.get('https://shop.outfitterextreme.com/truglo/archery.html?p=2');
   browser.sleep(2000);
}

function click11thProduct() {
   // Klik na Jedanaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(1).click();
   browser.sleep(2000);
}

function click12thProduct() {
   // Klik na Dvanaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(2).click();
   browser.sleep(2000);
}

function click13thProduct() {
   // Klik na Trinaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(3).click();
   browser.sleep(2000);
}

function click14thProduct() {
   // Klik na Cetrnaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(5).click();
   browser.sleep(2000);
}

function click15thProduct() {
   // Klik na Petnaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(6).click();
   browser.sleep(2000);
}

function click16thProduct() {
   // Klik na Sesnaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(7).click();
   browser.sleep(2000);
}

function click17thProduct() {
   // Klik na Sedamnaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(8).click();
   browser.sleep(2000);
}

function click18thProduct() {
   // Klik na Osamnaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(9).click();
   browser.sleep(2000);
}

function click19thProduct() {
   // Klik na Devetnaesti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(10).click();
   browser.sleep(2000);
}

function click20thProduct() {
   // Klik na Dvadeseti proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(11).click();
   browser.sleep(2000);
}

function clickFirearmHuntingLink() {
   // Klik na Firearm Hunting Link(
   element(by.className('level0 nav-2 uno parent')).click();
   browser.sleep(3000);
}

function click21stProduct() {
   // Klik na Dvadeset Prvi  
   element(by.className('column main')).all(by.className('product-image-photo')).get(0).click();
   browser.sleep(2000);
}

function chooseOption414() {
   // Izaberi opciju iz dropa 414
   element(by.name('super_attribute[414]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function openMiniCart() {
   // Otvori mini korpu
   element(by.className('counter-number')).click();
   browser.sleep(2000);
}

function clickViewAndEditCart() {
   // Klik na View And Edit Cart
   element(by.className('action viewcart')).click();
   browser.sleep(2000);
}

function checkSuccess1() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija
   browser.wait(EC.textToBePresentInElement($('.toolbar-number'), 'Items 21 to 21 of 21 total'), 5000);
   browser.sleep(2500);
}

function clickProceedToCheckout() {
   // Klik na Proceed to Checkout dugme
   element(by.buttonText('Proceed to Checkout')).click();
   browser.sleep(2000);
}

function clickNext() {
   // Klik na Next dugme
   element(by.buttonText('Next')).click();
   browser.sleep(3000);
}

function clickPlaceOrder() {
   // Klik na Place Order dugme
   element(by.buttonText('Place Order')).click();
   browser.sleep(5000);
}

function clickAvatarInHeader() {
   // Klik na avatar u hederu
   element(by.className('customer-avatar nav-toggle')).click();
   browser.sleep(2000);
}

function clickMyAccount() {
   // Klik na My Account
   element.all(by.className('header links')).get(1).all(by.tagName('li')).get(1).click();
   browser.sleep(2000);
}

function clickViewOrder() {
   // Klik na View Order link
   element.all(by.className('action view')).get(1).click();
   browser.sleep(2000);
}


module.exports = {
   landOnArcheryPage,
   click1stProduct,
   addToCart,
   click2ndProduct,
   click3rdProduct,
   click4thProduct,
   chooseOption,
   click5thProduct,
   click6thProduct,
   click7thProduct,
   chooseOption,
   click8thProduct,
   chooseOption,
   click9thProduct,
   clickNextArrowInPagination,
   click10thProduct,
   landOnSecondArcheryPage,
   click11thProduct,
   click12thProduct,
   click13thProduct,
   click14thProduct,
   click15thProduct,
   click16thProduct,
   click17thProduct,
   click18thProduct,
   click19thProduct,
   click20thProduct,
   clickFirearmHuntingLink,
   click21stProduct,
   chooseOption414,
   openMiniCart,
   clickViewAndEditCart,
   clickNext,
   checkSuccess1,
   clickProceedToCheckout,
   clickPlaceOrder,
   clickAvatarInHeader,
   clickMyAccount,
   clickViewOrder,
}