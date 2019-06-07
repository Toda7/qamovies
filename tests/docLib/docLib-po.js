function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_community.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_community.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);

 }
function clickOnLink() {
    //  Klik na Doc library link iz drop menu
    element(by.className('documents')).click();
 }

 function checkDoclibUrl() {
    // Provera Doc Library URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/documents'), 5000);
}

function checkDocText(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Document Library naslov
    browser.wait(EC.textToBePresentInElement($('.inner'), 'Document Library'), 5000);
    browser.sleep(2000);
}  

function counterOfDocs(){
    // Provera da li imamo 20 documenata na strani
    let list = element.all(by.css('.card.card_document'));
    expect(list.count()).toBe(20); 
    
}

function checkPagination(){
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($('.pagination')), 5000);

}

module.exports = {
    clickOnLink,
    checkDoclibUrl,
    HoverToOpenDrop,
    checkDocText,
    counterOfDocs,
    checkPagination,
}