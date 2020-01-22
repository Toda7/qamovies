function LandOnLogInPage() {
   // Dolazak na Magento Log In page
   browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/admin/'); 
   browser.sleep(1000);
}

function enterUsername() {
   // Unesi Username
   element(by.id('username')).sendKeys('todaadmin');
   browser.sleep(1000);
}

function enterPass() {
   // Unesi Password
   element(by.id('login')).clear().sendKeys('Beograd90210');
   browser.sleep(1000);
}

function clickOnSignIn() {
   //  Klik na Sign In dugme
   element(by.className('action-login action-primary')).click();
   browser.sleep(2000);
}

function LandOnCartPriceRulesPage() {
   // Dolazak na Cart Price Rules page
   browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/sales_rule/promo_quote/'); 
   browser.sleep(1000);
}

function clickOnAddNewRule() {
   //  Klik na Add New Rule dugme
   element(by.id('add')).click();
   browser.sleep(2000);
}

function enterRuleName() {
   // Unesi ime pravila
   element(by.name('name')).sendKeys('ATQA Coupon');
   browser.sleep(1000);
}

function enterDescription() {
   // Unesi Description
   element(by.css('.admin__control-textarea')).sendKeys('ATQA Coupon for Free Shipping');
   browser.sleep(1000);
}

// function selectShop() {
//    //  Odaberi shop
//    element.all(by.css('select.admin__control-multiselect')).get(0).all(by.tagName('option')).get(115).click();
//    browser.sleep(2000);
// }

function selectAllShops() {
   //  Selektuj sve shopove
   element.all(by.css('select.admin__control-multiselect')).click().sendKeys('tru');
   browser.sleep(2000);
}

function selectGroup() {
   //  Odaberi shop
   element.all(by.css('select.admin__control-multiselect')).get(1).all(by.tagName('option')).get(4).click();
   browser.sleep(2000);
}

function specificCoupon() {
   //  Specific coupon
   element(by.css('.admin__control-select')).all(by.tagName('option')).get(1).click();
   browser.sleep(2000);
}

function couponCode() {
   // Unesi kupon kod
   element(by.name('coupon_code')).sendKeys('ATQA_Coupon');
   browser.sleep(2000);
}

function selectFromDate() {
   //  Odaberi From datum
   element.all(by.className('ui-datepicker-trigger v-middle')).get(0).click();
   browser.sleep(2000);
}

function clickGoToday() {
   //  Klik na Go Today dugme
   element(by.buttonText('Go Today')).click();
   browser.sleep(2000);
}

function clickClose() {
   //  Klik na Close dugme
   // element(by.buttonText('Close')).click();
   element(by.className('ui-datepicker-buttonpane ui-widget-content')).element(by.buttonText('Close')).click();
   browser.sleep(2000);
}

function enterToDate() {
   //  Odaberi To datum
   element.all(by.className('admin__control-text _has-datepicker')).get(1).sendKeys('12/31/2023');
   browser.sleep(2000);
}

function clickActions() {
   //  Klik na Actions
   element.all(by.className('fieldset-wrapper admin__collapsible-block-wrapper')).get(2).click();
   browser.sleep(2000);
}

function freeShippingDrop() {
   //  Odaberi iz Free Shipping drop menija
   element.all(by.className('admin__control-select')).get(2).all(by.tagName('option')).get(3).click();
   browser.sleep(2000);
}

function clickSave() {
   //  Klik na Save dugme
   element(by.id('save')).click();
   browser.sleep(7000);
}

// function checkSuccess(){
//    var EC = protractor.ExpectedConditions;
//    // Provera da li je uspesno napravljen kupon
//    browser.wait(EC.textToBePresentInElement($('.td'), 'ATQA_Coupon'), 5000);
//    browser.sleep(2000);
// }  

 module.exports = {
   LandOnLogInPage,
   enterUsername,
   enterPass,
   clickOnSignIn,
   LandOnCartPriceRulesPage,
   clickOnAddNewRule,
   enterRuleName,
   enterDescription,
   // selectShop,
   selectAllShops,
   selectGroup,
   specificCoupon,
   couponCode,
   selectFromDate,
   clickGoToday,
   clickClose,
   enterToDate,
   clickActions,
   freeShippingDrop,
   clickSave,
   // checkSuccess,
 }