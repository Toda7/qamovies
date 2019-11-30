//function landOnDashboardPage() {
//  browser.get('https://qa.cbancnetwork.com'); 
//browser.sleep(2000);
//}

//function clickOnRisk() {
// Klik na Comunity link na dashboardu
// element(by.className('riska')).click();
// browser.sleep(2000);
//}

function clickOnRisk() {
  // klik na Risk assessment
  element(by.className('riska')).click();
  browser.sleep(2000);
}

function checkButton() {
  // Da li se ucitalo Your Risk Assessments text
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.textToBePresentInElement($('.inner'), 'Your Risk Assessments'), 5000);
}

function checkRiskUrl() {
  // Provera Url Risk assessmenta 
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.urlContains('https://qa.cbancnetwork.com/risk_assessment/home'), 5000);
}

module.exports = {
  //landOnDashboardPage,
  clickOnRisk,
  checkRiskUrl,
  checkButton,
}