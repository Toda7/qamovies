function lendOnProductDetails(){
    //dolazak na stranu producta
    browser.get('https://shop.outfitterextreme.com/truglo/hip-shot-adaptive-shooting-rest.html'); 
    browser.sleep(2000);
}

function clickOnOrdersLink(){
    // Klik na Orders link 
   element(by.id('tab_orders_content')).click();
 }

 function clickOnOrdersLastOrder(){
    // Klik na poslednji naruceni ordcer 
    element.all(by.className('col-created_at')).get(2).click();
 }

 function clickOnShip(){
    // Klik na Ship link 
   element(by.id('order_ship')).click();
 }

 function clickOnAddNumber(){
    //klik na add tracking number
   element(by.buttonText('Add Tracking Number')).click();
 }

 function addNumber(){
    //klik na add tracking number
   element(by.id('trackingN1')).clear().sendKeys('121312');
}

function scrollPage(){
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function clickOnSubmitShip(){
    //klik na Submit shipping
    element(by.buttonText('Submit Shipment')).click();
}

function landOnMyAccount() {
    // dolazak My account u shopy
    browser.get('https://shop.outfitterextreme.com/airarmortech/customer/account/'); 
    browser.sleep(2000);
 }

//  function checkIfOrderComplete() {
//      // cekiranje da li je order complete
//      var EC = protractor.ExpectedConditions;
//     browser.wait(EC.textToBePresentInElement($('col_status'), 'Complete'), 5000); 
//  }

 function clickOnOrderView(){
    // Klik na poslednji naruceni ordcer 
    element.all(by.className('action view')).get(1).click();
 }
 
 function checkIfOrderComplete() {
    // cekiranje da li je order complete
    var xxx = element.all(by.className('col status')).get(1);
    expect(xxx.getText()).toEqual('Complete');
 }

 function clickOnOrderShippments(){
   // Klik na poslednji naruceni ordcer 
   element.all(by.className('nav item')).get(2).click();
}

function checkTrackNumber() {
        var xxx = element.all(by.className('tracking-content'));
        expect(xxx.getText()).toEqual([ '121312' ]);
}

function checkProductName() {
   var xxx = element.all(by.className('product name product-item-name'));
   expect(xxx.getText()).toEqual([ 'HIP-SHOT™ ADAPTIVE SHOOTING REST' ]);
}

function checkProductSKU() {
   var xxx = element.all(by.className('col sku'));
   expect(xxx.getText()).toEqual([ 'SKU', 'TG8935XB' ]);
}

function checkQtyShipped() {
   var xxx = element.all(by.className('col qty'));
   expect(xxx.getText()).toEqual([ 'Qty Shipped', '1' ]);
}

function checkPrintOrderLink() {
   var xxx = element.all(by.className('col qty')).get(0);
   expect(xxx.getText()).toEqual('Print Order');
}

function checkPrintAllShipLink() {
   var xxx = element.all(by.className('col qty')).get(1);
   expect(xxx.getText()).toEqual('Print All Shipments');
}

function checkPrintShippmentLink() {
   var xxx = element.all(by.className('col qty')).get(2);
   expect(xxx.getText()).toEqual('Print Shipment');
}

function checkTrackAllShipmentsLink() {
   var xxx = element.all(by.className('action track')).get(0);
   expect(xxx.getText()).toEqual('Track All Shipments');
}

function checkTrackThisShipmentsLink() {
   var xxx = element.all(by.className('action track')).get(1);
   expect(xxx.getText()).toEqual('Track this shipment');
}

function checkShippingAddressSection() {
var xxx = element.all(by.className('box-content')).get(0);
   expect(xxx.getText()).toEqual('Bradly Seales 2690 COUNTY ROAD 64 PLANTERSVILLE United States Alabama 36758 334-467-0770');

}

function checkBilingAddressSection() {
   // cekiranje Biling adrese
   var xxx = element.all(by.className('box-content')).get(2);
      expect(xxx.getText()).toEqual('Bradly Seales 2690 COUNTY ROAD 64 PLANTERSVILLE United States Alabama 36758 334-467-0770');
   
   }

   function checkPaymentSection() {
      // cekiranje Biling adrese
      var xxx = element.all(by.className('box-content')).get(3);
         expect(xxx.getText()).toEqual('Payment Method');
      }

 module.exports = {
    clickOnOrdersLink,
    clickOnOrdersLastOrder,
    clickOnShip,
    clickOnAddNumber,
    addNumber,
    scrollPage,
    clickOnSubmitShip,
    landOnMyAccount,
    checkIfOrderComplete,
    lendOnProductDetails,
    clickOnOrderView,
    clickOnOrderShippments,
    checkTrackNumber,
    checkProductName,
    checkProductSKU,
    checkQtyShipped,
    checkPrintOrderLink,
    checkPrintAllShipLink,
    checkPrintShippmentLink,
    checkTrackAllShipmentsLink,
    checkTrackThisShipmentsLink,
    checkShippingAddressSection,
    checkBilingAddressSection,
    checkPaymentSection,
 }