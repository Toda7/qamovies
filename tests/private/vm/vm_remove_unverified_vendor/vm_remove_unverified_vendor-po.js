function clickOnThreeDotsLink() {
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/div/div[1]/div/div[1]/div/span')).click(); 
     browser.sleep(2000);
}
function clickArhiveVendor() {
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/div/div[1]/div/div[1]/div/ul/li[3]')).click(); 
     browser.sleep(2000);
  }

function clickOnDeleteToConfirm() {
    element(by.className('btn-flat right')).click();
    browser.sleep(2000);
}

function checkDeletedMessage(){
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.textToBePresentInElement($('.card-content'), 'Fifa successfully deleted.'), 5000);
}   

  module.exports = {
    clickOnThreeDotsLink,
    clickArhiveVendor,
    clickOnDeleteToConfirm,
    checkDeletedMessage,
  }