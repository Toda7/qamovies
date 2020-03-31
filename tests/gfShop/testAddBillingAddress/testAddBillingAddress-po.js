function landOnPeakShop() {
    // Dolazak na Peak shop
    browser.get('https://shop.outfitterextreme.com/peakrefuel');
    browser.sleep(2000)
}

function clickOnMealsLink() {
    // klik na List View Producta 
    element(by.partialLinkText('Meals')).click();
    browser.sleep(2000);
}

function clickToUncheck() {
    // klik na uncheck same billing i shipping adresa
    element(by.cssContainingText('span', 'My billing and shipping address are the same')).click();
    browser.sleep(2000);
}

function clickOnAddressSelect() {
    // klik na Address select
    element(by.css('.checkout-payment-method .fieldset>.field-select-billing>.control')).all(by.tagName('option')).last().click();
    browser.sleep(3000);
}

function deleteFirstName() {
    // brisanje first name 
    element.all(by.className('field _required')).get(9).element(by.className('input-text')).clear();
    browser.sleep(2000);
 } 

 function checkMsg1() {
    // Provera error poruke "This is a required field za First name"
    var zzz = element.all(by.className('field-error')).get(0);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 }  

 function deleteLastName() {
    // brisanje last name 
    // element.all(by.name('billingAddressauthnetcim.lastname')).clear();
    element.all(by.className('field _required')).get(10).element(by.className('input-text')).clear();
    browser.sleep(2000);
 }

 function checkMsg2() {
    // Provera error poruke "This is a required field za Last name"
    var zzz = element.all(by.className('field-error')).get(1);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 }

 function clickOnUpdate() {
    // klik na List View Producta 
    element(by.className('action action-update')).click();
    browser.sleep(5000);
}

function checkMsg3() {
    // Provera error poruke "This is a required field za First name"
    var zzz = element.all(by.className('field-error')).get(2);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 }  

 function checkMsg4() {
    // Provera error poruke "This is a required field za First name"
    var zzz = element.all(by.className('field-error')).get(3);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 }  

 function checkMsg5() {
    // Provera error poruke "This is a required field za First name"
    var zzz = element.all(by.className('field-error')).get(4);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 }  

 function checkMsg6() {
    // Provera error poruke "This is a required field za First name"
    var zzz = element.all(by.className('field-error')).get(5);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 }  

 function checkMsg7() {
    // Provera error poruke "This is a required field za First name"
    var zzz = element.all(by.className('field-error')).get(6);
    expect(zzz.getText()).toEqual('This is a required field.');
    browser.sleep(2000);
 } 

 function enterFirstName() {
    //  unos imena
    element.all(by.className('field _required')).get(9).element(by.className('input-text')).sendKeys('Bradly');;
    browser.sleep(2000);
}

function enterLastName() {
    //  Unesi prezime
    element.all(by.className('field _required')).get(10).element(by.className('input-text')).sendKeys('Seales');;
    browser.sleep(2000);
}

function enterStreetAddress() {
    //  Unesi prezime
    element.all(by.className('field _required')).get(11).element(by.className('input-text')).sendKeys('Sunset Blvd');;
    browser.sleep(2000);
}

function enterCity() {
    //  Unesi prezime
    element.all(by.className('field _required')).get(12).element(by.className('input-text')).sendKeys('Los angeles');;
    browser.sleep(2000);
}

// function clickToSelectProvince() {
//     //  Klik to select Province from drop
//     element.all(by.className('field _required')).get(13).element(by.tagName('select')).get(11).click();
//     // element(by.name('region_id')).all(by.tagName('option')).get(11).click();
//     browser.sleep(3000);
//  }

 function clickToSelectProvince() {
    //  Klik to select Province from drop
    element.all(by.className('field _required')).get(14).all(by.tagName('option')).get(12).click();
    browser.sleep(6000);
 }

 function enterZip() {
    //  Unesi prezime
    element.all(by.className('field _required')).get(16).element(by.className('input-text')).sendKeys('90001');;
    browser.sleep(2000);
}

function enterPhone() {
    //  Unesi prezime
    element.all(by.className('field _required')).get(17).element(by.className('input-text')).sendKeys('66611188');;
    browser.sleep(2000);
}

function clickPlaceOrder() {
    // klik na List View Producta 
    element(by.className('action primary checkout')).click();
    browser.sleep(6000);
}

function lendOnMagento() {
    // Dolazak u magento 
 browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/admin/dashboard/');
 browser.sleep(3000);
 }

 function goToUserDetail(){
   // Dolazak na user datail u magentu
   browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/customer/index/edit/id/14911/');
   browser.sleep(3000);
   }

 function clickOnAddressesLink(){
    // Klik na Addresses link 
   element(by.id('tab_address')).click();
    browser.sleep(5000);
 }

 function clickOnSelectLink() {
   // Klik na Select link da se otvori drop menu 
   element.all(by.className('action-select')).get(4).click();
   browser.sleep(1500);
}

function clickOnDelete() {
   // Klik na Delete iz drop menija 
   element(by.className('action-menu _active')).all(by.className('action-menu-item')).get(3).click();
   browser.sleep(2000);
}

function clickOnOkInModal() {
   // Klik na OK u Confirm Delete modalu 
   element(by.className('action-primary action-accept')).click();
   browser.sleep(2000);
}
 
module.exports = {
    landOnPeakShop,
    clickOnMealsLink,
    clickToUncheck,
    clickOnAddressSelect,
    deleteFirstName,
    deleteLastName,
    checkMsg1,
    checkMsg2,
    clickOnUpdate,
    checkMsg3,
    checkMsg4,
    checkMsg5,
    checkMsg6,
    checkMsg7,
    enterFirstName,
    enterLastName,
    enterStreetAddress,
    enterCity,
    clickToSelectProvince,
    enterZip,
    enterPhone,
    clickPlaceOrder,
    clickOnAddressesLink,    
    lendOnMagento,
    goToUserDetail,
    clickOnSelectLink,
    clickOnDelete,
    clickOnOkInModal,
}