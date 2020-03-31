function clickOnEditLink() {
   // Klik on edit link for address
   element.all(by.className('action edit')).get(2).click();
   browser.sleep(3000);
}

function clickOnBilling() {
   // Klik on Use as my default shipping address
   element(by.className('field choice set billing')).click();
   browser.sleep(3000);
}

function clickOnShipping() {
   // Klik on Use as my default billing address
   element(by.className('field choice set shipping')).click();
   browser.sleep(3000);
}

function checkBoxContent() {
   // Provera da li je nasa nova addresa otisla na mesto Building addrese addrese 
   var xxx = element.all(by.className('box-content')).get(0);
   expect(xxx.getText()).toEqual('Bradly Seales\nStreet 1\nNew York, New York, 90001\nUnited States\nT: 555333');
}

function checkBoxContent2() {
   // Provera da li je nasa nova addresa otisla na mesto Shipping addrese 
   var xxx = element.all(by.className('box-content')).get(1);
   expect(xxx.getText()).toEqual('Bradly Seales\nStreet 1\nNew York, New York, 90001\nUnited States\nT: 555333');
}

function checkIsOurNewAddressIsSelected() {
   // Provera da li je nasa nova addresa selektovana kao default shipping address
   var xxx = element.all(by.className('shipping-address-item selected-item')).get(0);
   expect(xxx.getText()).toEqual('Bradly Seales\nStreet 1\nNew York, New York 90001\nUnited States\n555333');
   
}


 module.exports = {
   clickOnEditLink,
   clickOnBilling,
   clickOnShipping,
   checkBoxContent,
   checkBoxContent2,
   checkIsOurNewAddressIsSelected,
}