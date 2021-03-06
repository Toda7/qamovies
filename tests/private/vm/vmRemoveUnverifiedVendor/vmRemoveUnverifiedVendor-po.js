function clickOnThreeDotsLink() {
    element(by.className('dropdown')).click(); 
     browser.sleep(2000);
}
function clickArhiveVendor() {
  element(by.css('.dropdown-actions-menu')).all(by.tagName('ul li')).get(2).click(); 
     browser.sleep(2000);
}

function clickOnDeleteToConfirm() {
    element(by.className('btn-flat right')).click();
    browser.sleep(2000);
}

function checkDeletedMessage(){
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.textToBePresentInElement($('.card-content'), 'Fifa successfully deleted.'), 7000);
}   

  module.exports = {
    clickOnThreeDotsLink,
    clickArhiveVendor,
    clickOnDeleteToConfirm,
    checkDeletedMessage,
  }