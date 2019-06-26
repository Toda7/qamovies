function clickInProgressLink() {
    //  Klik na lendwell link iz drop menu
    element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div/a[2]')).click();
    browser.sleep(2000);
 }
 function checkInProgressURL() {
    // Provera da li smo dobili InProgress stranu, provera URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/ra/b0fcf98f-a435-4c19-bae0-bb9b15bb94b4/in_progress'), 5000);
    browser.sleep(2000);
}
function clickToOpenDropDownMenu() {
    //  Click to open drop down menu
    element(by.className('dropdown_menu')).click();
    browser.sleep(2000);
 }
function clickDeleteLink() {
    //  Klik na delete link iz drop down menija
    element(by.xpath('//*[@id="root"]/div/div[2]/div/div[2]/ul/li[2]/div[3]/div[2]/div/ul/li[2]')).click();
    browser.sleep(2000);
 }
 function confirmDelete() {
    //  Potvrda brisanja InProgress template
    element(by.buttonText('Delete')).click();
 }
 function checkSuccessfullyMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.success'), 'Assessment Sima Template - 1 was successfully deleted.'), 5000);
    browser.sleep(2000);
}   

 function checkNoAssessmentMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'There are no assessments in progress'), 5000);
    browser.sleep(2000);
}   

module.exports = {
    clickInProgressLink,
    checkInProgressURL,
    clickToOpenDropDownMenu,
    clickDeleteLink,
    confirmDelete,
    checkSuccessfullyMessage,
    checkNoAssessmentMessage,
}