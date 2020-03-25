function clickCancelCoupon() {
   // Klik on Cancel Coupon button
   element(by.className('action cancel primary')).click(); 
   browser.sleep(2000);
}

function checkCancelCouponSuccessMessage() {
   // Da li se pojavila poruka da je otkazan kupon kod
   var xxx = element(by.className('message-success success message'));
   expect(xxx.getText()).toEqual('You canceled the coupon code.');
   browser.sleep(1000)));
}

module.exports = {
   clickCancelCoupon,
   checkCancelCouponSuccessMessage,
}