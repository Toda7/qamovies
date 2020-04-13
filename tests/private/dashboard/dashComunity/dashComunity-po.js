function clickOnComunity() {
    // Klik na Comunity link na dashboardu
    element(by.className('home')).click();
    browser.sleep(2000);
 }
 

 function checkComunityUrl() {
     // Provera Url Comunity 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/home'), 7000);
}

 function checkHomeTitle()  {
    // Proverava da li se ucitao Home title 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.nav_title'),'Home'), 7000);
}

function checkSearchField()  {
    // Proverava da li se ucitao Global Search polje 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.search_button'),'Search'), 7000);
}

function checkStartDiscButton()  {
   // Proverava da li se ucitao Start Discussion button   
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.fixed-action-btn.start_discussion'),'START DISCUSSION'), 7000);
}


 module.exports = {
    clickOnComunity,
     checkComunityUrl,
     checkHomeTitle,
     checkSearchField,
     checkStartDiscButton,
 }