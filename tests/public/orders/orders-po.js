function clickOnLink() {
    //  Klik na ondemand link iz drop menu
    element(by.className('submenu_item link_orders')).click();
 }

 function checkOrders() {
    // Provera ondemand URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/orders/my_orders'), 7000);
    browser.sleep(2000);
}

function checkOrdersPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC: My Orders'), 7000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.textToBePresentInElement($('.header_meta'), 'Order History'), 7000);
}











 module.exports = {
    clickOnLink,
    checkOrders,
    checkOrdersPageTitle,
    checkTitleOnPage,

    
 }