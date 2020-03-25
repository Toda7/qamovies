function landOnDashboardPage() {
   browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}
//function clickOnCbancPremium() {
    // Klik na Comunity link na dashboardu
   // element(by.className('cta')).click();
    //browser.sleep(2000);

    function clickOnCbancPremium() {
      // klik na AD dugme
      element(by.id('premium_button')).click();
    browser.sleep(5000);
  }

  function checkPageTitle()  {
    // Proverava da li se ucitao Page title 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('CBANC Premium'), 7000);
}

function checkShowMeHowButton()  {
  // Proverava da li se ucitao SHow me how button 
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.textToBePresentInElement($('.cta'),'SHOW ME HOW'), 7000);
}
    

 function checkCbancPremiumUrl() {
    // Provera Url 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/premium?icn=dashboard'), 7000);
}


module.exports = {
    landOnDashboardPage,
    clickOnCbancPremium,
    checkCbancPremiumUrl,
    checkPageTitle,
    checkShowMeHowButton,
}