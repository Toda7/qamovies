//function landOnDashboardPage() {
  //  browser.get('https://qa.cbancnetwork.com'); 
   // browser.sleep(2000);
//}

function clickOnVendorMng() {
    // Klik na Comunity link na dashboardu
    element(by.className('vm')).click();
    browser.sleep(2000);
 }
 function clickOnVendorMng() {
   // klik na Vendor Mng
   element(by.className('vm')).click();
}

 function checkVendorMngUrl() {
     // Provera Url Risk assessmenta 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/vm/home'), 7000);
}



 module.exports = {
    //landOnDashboardPage,
    checkVendorMngUrl,
    clickOnVendorMng,
 }