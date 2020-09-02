function landOnArcheryPage() {
   // Dolazak na Archery page 
   browser.get('https://shop.outfitterextreme.com/truglo/archery.html');
   browser.sleep(2000);
}

function click1stProduct() {
   // Klik na prvi proizvod 
   element(by.className('column main')).all(by.className('product-image-photo')).get(0).click();
   browser.sleep(3000);
}

function addToCart() {
   // Dodaj proizvod u korpu
   element(by.buttonText('Add to Cart')).click();
   browser.sleep(5000);
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

function chooseOption() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[412]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}


function chooseOption() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[412]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function clickNextArrowInPagination() {
   // Klik na next arrow u paginaciji
   element.all(by.className('action  next')).get(1).click();
   browser.sleep(2000);
}


function landOnSecondArcheryPage() {
   // Dolazak na drugu Archery stranu 
   browser.get('https://shop.outfitterextreme.com/truglo/archery.html?p=2');
   browser.sleep(2000);
}

function clickFirearmHuntingLink() {
   // Klik na Firearm Hunting Link(
   element(by.className('level0 nav-2 uno parent')).click();
   browser.sleep(3000);
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
   browser.wait(EC.textToBePresentInElement($('.toolbar-number'), 'Items 21 to 21 of 21 total'), 7000);
   browser.sleep(2500);
}

function clickProceedToCheckout() {
   // Klik na Proceed to Checkout dugme
   element(by.buttonText('Proceed to Checkout')).click();
   browser.sleep(3000);
}

function clickNext() {
   // Klik na Next dugme
   element(by.buttonText('Next')).click();
   browser.sleep(3000);
}

function clickPlaceOrder() {
   // Klik na Place Order dugme
   element(by.buttonText('Place Order')).click();
   browser.sleep(10000);
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

// testove za click on product nisam brisao jer neke od njih koristimo jos u nekim testovima, neka ih za sad 

function landOnProduct1() {
   // Dolazak na product 1  
   browser.get('https://shop.outfitterextreme.com/truglo/carbon-xs-drop-away-arrow-rest.html');
   browser.sleep(2000);
}

function landOnProduct2() {
   // Dolazak na product 2  
   browser.get('https://shop.outfitterextreme.com/truglo/accu-x-capture-bowfishing-rest.html');
   browser.sleep(2000);
}

function landOnProduct3() {
   // Dolazak na product 3 
   browser.get('https://shop.outfitterextreme.com/truglo/spring-shot-bowfishing-rest.html');
   browser.sleep(2000);
}

function landOnProduct4() {
   // Dolazak na product 4
   browser.get('https://shop.outfitterextreme.com/truglo/springfisher-bowfishing-arrow.html');
   browser.sleep(2000);
}

function landOnProduct5() {
   // Dolazak na product 5
   browser.get('https://shop.outfitterextreme.com/truglo/carpedo-bowfishing-arrow.html');
   browser.sleep(2000);
}

function landOnProduct6() {
   // Dolazak na product 6
   browser.get('https://shop.outfitterextreme.com/truglo/lunker-bowfishing-arrow.html');
   browser.sleep(2000);
}

function landOnProduct7() {
   // Dolazak na product 7
   browser.get('https://shop.outfitterextreme.com/truglo/optioptispeed-velocity-calibrated-bdc-crossbow-scope.html');
   browser.sleep(2000);
}

function landOnProduct8() {
   // Dolazak na product 8
   browser.get('https://shop.outfitterextreme.com/truglo/titanium-x-fixed-crossbow-broadheads.html');
   browser.sleep(2000);
}

function landOnProduct9() {
   // Dolazak na product 9
   browser.get('https://shop.outfitterextreme.com/truglo/titanium-x-mechanical-crossbow-broadheads.html');
   browser.sleep(2000);
}

function landOnProduct10() {
   // Dolazak na product 10
   browser.get('https://shop.outfitterextreme.com/truglo/tru-fit-universal-replacement-release-strap.html');
   browser.sleep(2000);
}

function landOnProduct11() {
   // Dolazak na product 11
   browser.get('https://shop.outfitterextreme.com/truglo/tru-point-xtreme-universal-shotgun-sights.html');
   browser.sleep(2000);
}

function landOnProduct12() {
   // Dolazak na product 12
   browser.get('https://shop.outfitterextreme.com/truglo/tru-brite-dual-color-multi-reticle.html');
   browser.sleep(2000);
}

function landOnProduct13() {
   // Dolazak na product 13
   browser.get('https://shop.outfitterextreme.com/truglo/tru-tec-micro-subcompact-open-red-dot-sight.html');
   browser.sleep(2000);
}

function landOnProduct14() {
   // Dolazak na product 14
   browser.get('https://shop.outfitterextreme.com/truglo/hip-shot-adaptive-shooting-rest.html');
   browser.sleep(2000);
}

function landOnProduct15() {
   // Dolazak na product 15
   browser.get('https://shop.outfitterextreme.com/truglo/tfx-pro-remington-shotgun-sights.html');
   browser.sleep(2000);
}

function landOnProduct16() {
   // Dolazak na product 16
   browser.get('https://shop.outfitterextreme.com/truglo/omnia-1-6x24-30mm-ir-sp-1pc-illuminated-reticle-tactical-scope.html');
   browser.sleep(2000);
}

function landOnProduct17() {
   // Dolazak na product 17
   browser.get('https://shop.outfitterextreme.com/truglo/eminus4-16x44-30mm-ir-ml-1pc-illuminated-reticle-tactical-scope.html');
   browser.sleep(2000);
}

function landOnProduct18() {
   // Dolazak na product 18
   browser.get('https://shop.outfitterextreme.com/truglo/tfx-pro-handgun-day-night-sights-tfx-ber-px4-storm-frnt-pro-orn.html');
   browser.sleep(2000);
}

function landOnProduct19() {
   // Dolazak na product 19
   browser.get('https://shop.outfitterextreme.com/truglo/new-head-banger-long-range-turkey-choke-tube.html');
   browser.sleep(2000);
}

function chooseOption1ForProduct19() {
   // Izaberi opciju 1 iz dropa 414
   element(by.name('super_attribute[414]')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function chooseOption2ForProduct19() {
   // Izaberi opciju 2 iz dropa 414
   element(by.name('super_attribute[414]')).all(by.tagName('option')).get(2).click();
   browser.sleep(2000);
}

function chooseOption3ForProduct19() {
   // Izaberi opciju 3 iz dropa 414
   element(by.name('super_attribute[414]')).all(by.tagName('option')).get(3).click();
   browser.sleep(2000);
}

module.exports = {
   landOnArcheryPage,
   click1stProduct,
   addToCart,
   click2ndProduct,
   click3rdProduct,
   chooseOption,
   click5thProduct,
   chooseOption,
   chooseOption,
   clickNextArrowInPagination,
   landOnSecondArcheryPage,
   clickFirearmHuntingLink,
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
   landOnProduct1,
   landOnProduct2,
   landOnProduct3,
   landOnProduct4,
   landOnProduct5,
   landOnProduct6,
   landOnProduct7,
   landOnProduct8,
   landOnProduct9,
   landOnProduct10,
   landOnProduct11,
   landOnProduct12,
   landOnProduct13,
   landOnProduct14,
   landOnProduct15,
   landOnProduct16,
   landOnProduct17,
   landOnProduct18,
   landOnProduct19,
   chooseOption1ForProduct19,
   chooseOption2ForProduct19,
   chooseOption3ForProduct19,

}