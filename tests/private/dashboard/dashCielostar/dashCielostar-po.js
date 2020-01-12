//function landOnDashboardPage() {
  //  browser.get('https://qa.cbancnetwork.com'); 
    //browser.sleep(2000);
//}

//function clickOnCielostar() {
    // Klik na Comunity link na dashboardu
   // element(by.className('cielostar cielostar_icon')).click();
   // browser.sleep(2000);
 //}
 function clickOnCielostar() {
    // klik na Cielostar
    element(by.className('cielostar cielostar_icon')).click();
}

 function checkCielostarUrl() {
     // Provera Url Cielostara
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/cielostar'), 5000);
}

function checkForm()  {
  // Proverava da li se ucitala "REQUEST A QUOTE" forma
  var EC = protractor.ExpectedConditions;8 - 
  browser.wait(EC.textToBePresentInElement($('.top_right'),'REQUEST A QUOTE'), 5000);
}


function checkFooter()  {
  // Proverava da li se ucitao Copyright text u footeru
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.textToBePresentInElement($('.copy'),'2008 - 2020 CBANC Network. All rights reserved.'), 5000);
}

 module.exports = {
    //landOnDashboardPage,
    clickOnCielostar,
     checkCielostarUrl,
     checkFooter,
     checkForm,
 }