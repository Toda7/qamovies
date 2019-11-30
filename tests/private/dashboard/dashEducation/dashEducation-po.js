//function landOnDashboardPage() {
   // browser.get('https://qa.cbancnetwork.com'); 
    //browser.sleep(2000);
//}

//function clickOnEducation() {
    // Klik na Education link na dashboardu
  //  element(by.className('education')).click();
    //browser.sleep(2000);
 //}

 function clickOnEducation() {
    // klik na search dugme
    element(by.className('education')).click();
}

// function checkSearchField()  {
//     // Proverava da li se Search polje 
//     var EC = protractor.ExpectedConditions;
//     browser.wait(EC.textToBePresentInElement($('.search_term'),'Search Upcoming Webinars'), 5000);
// }

function checkWebinarIsPresent(){
    // Provera da li se webinar ucitao
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf($('.webinar_item')), 5000);
    }

 function checkEducationUrl() {
     // Provera Url Education 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/webinars/calendar'), 5000);
}

 module.exports = {
    //landOnDashboardPage,
    clickOnEducation,
     checkEducationUrl,
     //checkSearchField,
     checkWebinarIsPresent,
 }