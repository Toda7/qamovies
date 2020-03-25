function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_community.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_community.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);

 }

function clickOnLink() {
    //  Klik na Topics link iz drop menu
    element(by.className('topics')).click(); 
 }

 function checkTopicsUrl() {
    // Provera Topics URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/topics'), 7000);
}

function checkTopicsText(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Topics naslov
    browser.wait(EC.textToBePresentInElement($('.topics_top_title'), 'Topics'), 7000);
    browser.sleep(2000);
}  

function counterOfTopics(){
    // Provera da li imamo 20 topica na strani
    let list = element.all(by.css('.card.card_topic'));
    expect(list.count()).toBe(20); 
    
}

function checkPagination(){
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($('.pagination')), 7000);

}

module.exports = { 
    HoverToOpenDrop,
    clickOnLink,
    checkTopicsUrl,
    checkTopicsText,
    counterOfTopics,
    checkPagination,
}