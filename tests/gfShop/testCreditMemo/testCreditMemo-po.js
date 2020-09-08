
 function clickOnCreditMemoLink(){
    // Klik na Credit Memo link 
   element(by.id('order_creditmemo')).click();
}

function clickOnRefundedOfflineButton(){
    // Klik na Refunded offline 
    element(by.buttonText('Refund Offline')).click();
}

 function checkClosedLabel() {
     // Provera da li se ucitala Closed labela
     var xxx = element.all(by.className('col status')).get(1);
      expect(xxx.getText()).toEqual('Closed');
}

 function checkClosedLabelOnOrderDetailsPage() {
    // Provera da li se ucitala Closed labela na order details strani
    var xxx = element(by.className('order-status'));
    expect(xxx.getText()).toEqual('CLOSED');
 }

 function clickOnRefundsToGetRefundTab(){
   // Klik na Refunds da bi dobili Refund tab
  element.all(by.className('nav item')).get(2).click();
}

function checkPrintRefundedLink() {
  // Da li se ucitao Print Refunded
  var xxx = element.all(by.className('action print')).get(1);
  expect(xxx.getText()).toEqual('Print Order');
}

 module.exports = {
   clickOnCreditMemoLink,
   clickOnRefundedOfflineButton,
   checkClosedLabel,
   checkClosedLabelOnOrderDetailsPage,
   clickOnRefundsToGetRefundTab,
   checkPrintRefundedLink,
 }