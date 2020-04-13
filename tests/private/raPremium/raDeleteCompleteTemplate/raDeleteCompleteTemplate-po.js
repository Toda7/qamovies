function clickDeleteLink() {
    //  Klik na delete link iz drop down menija
    element.all(by.css('.completed .collection-item.completed_assessment .actions .dropdown_menu .dropdown-content .collection .collection-item')).get(1).click();
    browser.sleep(2000);
 }
function checkSuccessfullyMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.success'), 'Assessment START UP TEMPLATE was successfully deleted.'), 7000);
    browser.sleep(2000);
}   
function checkNoAssessmentMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'There are no completed assessments'), 7000);
    browser.sleep(2000);
}   

 module.exports = {
    clickDeleteLink,
    checkSuccessfullyMessage,
    checkNoAssessmentMessage,
 }
