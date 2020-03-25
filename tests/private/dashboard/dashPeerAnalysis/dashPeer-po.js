//function landOnDashboardPage() {
   // browser.get('https://qa.cbancnetwork.com'); 
    //browser.sleep(2000);
//}

//function clickOnPeer() {
    // Klik na Comunity link na dashboardu
    //element(by.className('peera')).click();
   // browser.sleep(2000);
 //}

 function clickOnPeer() {
    // klik na search dugme
    element(by.className('peera')).click();
}

 function checkPeerUrl() {
     // Provera Url Comunity 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer_analysis/'), 7000);
}

 module.exports = {
    //landOnDashboardPage,
     clickOnPeer,
     checkPeerUrl,
 }