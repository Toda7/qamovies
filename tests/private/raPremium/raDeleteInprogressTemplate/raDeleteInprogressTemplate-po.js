function clickInProgressLink() {
    //  Klik na In Progress link iz drop menu
    element(by.partialLinkText('In Progress')).click();
    browser.sleep(2000);
 }
 function checkInProgressURL() {
    // Provera da li smo dobili In Progress stranu, provera URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/ra/b0fcf98f-a435-4c19-bae0-bb9b15bb94b4/in_progress'), 5000);
    browser.sleep(2000);
}
function clickToOpenDropDownMenu() {
    //  Click to open drop down menu with the edit and delete links
    element(by.className('dropdown_menu')).click();
    browser.sleep(2000);
 }
function clickDeleteLink() {
    //  Klik na delete link iz drop down menija
    element.all(by.css('.in_progress .collection-item.in_progress_assessment .actions .dropdown_menu .dropdown-content .collection .collection-item')).get(1).click();
    browser.sleep(2000);
 }
 function confirmDelete() {
    //  Potvrda brisanja InProgress template
    element(by.buttonText('Delete')).click();
 }
 function checkSuccessfullyMessage(){
    //  Provera da li se pojavila successfully message
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.success'), 'Assessment Sima Template - 1 was successfully deleted.'), 5000);
    browser.sleep(2000);
}   

 function checkNoAssessmentMessage(){
    //  Provera da li se pojavila "There are no assessments in progress" message
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