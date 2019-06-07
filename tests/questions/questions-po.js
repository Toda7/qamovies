function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_community.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_community.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
  
 }
function clickOnLink() {
    //  Klik na Get answers link iz drop menu
    element(by.className('questions')).click();
 }
function checQuestionsURL() {
    // Provera "Get answers" URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/questions'), 5000);
}
function checkQuestionsPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Discussions, Useful Answers, and Professional Banking Information to Answer Your Questions from Real Bankers'), 5000);
}
function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao button
    browser.wait(EC.textToBePresentInElement($('.sidebar_box'), 'New to CBANC'), 5000);
}
function counterOfArticle(){
    let list = element.all(by.css('.thread.card_thread'));
    expect(list.count()).toBe(10); 
}
function chekcPagination(){
    var EC = protractor.ExpectedConditions;
    // Da li se ucitala paginacija
    browser.wait(EC.presenceOf($('.pagination')), 5000);
}

 module.exports = {
    HoverToOpenDrop,
    clickOnLink,
    checQuestionsURL,
    checkQuestionsPageTitle,
    checkButton,
    counterOfArticle,
    chekcPagination,
}