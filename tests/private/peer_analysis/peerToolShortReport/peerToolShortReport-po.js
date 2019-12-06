function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function hoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
  
 }
function clickOnLink() {
    //  Klik na PA link iz drop menu
    element(by.className('peer_group_analysis')).click();
    browser.sleep(2000);

 }

 function clickOnLunchButton() {
    //  Klik na Lunch dugme
    element(by.className('button')).click();
    browser.sleep(2000);
 }

 function clickOnCategory1() {
    //  Klik na category checkbox
    element.all(by.className('checkbox')).get(0).click();
    browser.sleep(2000);
 }

 function clickOnExpender1() {
   //  Klik na category checkbox
   element.all(by.className('toggle_expanded')).get(0).click();
   browser.sleep(2000);
}

function clickOnCategory3() {
    //  Klik na category checkbox
    element.all(by.className('checkbox')).get(12).click();
    browser.sleep(2000);
 }
 
 function clickOnExpender3() {
    //  Klik na category checkbox
    element.all(by.className('toggle_expanded')).get(2).click();
    browser.sleep(2000);
 }

 function clickOnCategory6() {
    //  Klik na category checkbox
    element.all(by.className('checkbox')).get(27).click();
    browser.sleep(2000);
 }
 
 function clickOnExpender6() {
    //  Klik na category checkbox
    element.all(by.className('toggle_expanded')).get(5).click();
    browser.sleep(2000);
 }

 function clickOnSearchF() {
    // klik na search polje  
    element(by.className('search_bank_field')).click();
    browser.sleep(2000);
 }
 
 function enterBankName1() {
    element(by.className('search_bank_field')).sendKeys('ban');
    browser.sleep(2000);
 }
 
 function clickOnBank1() {
    // klik na ime Banke  
    element(by.className('bank_menu_list_entry highlighted')).click();
    browser.sleep(2000);
 }

 function clickOnSearchF2() {
    // klik na search polje  
    element(by.className('search_bank_field')).click();
    browser.sleep(2000);
 }
 
 function enterBankName2() {
    // kucanje imena banke
    element(by.className('search_bank_field')).sendKeys('ba');
    browser.sleep(2000);
 }
 
 function clickOnBank2() {
    // klik na ime banke  
    // element(by.className('bank_menu_list_entry highlighted')).click();
    // browser.sleep(2000);
 
    element.all(by.className('bank_menu_list_entry')).get(1).click();
    browser.sleep(2000);
 
 }

 function clickOnDateExpender1() {
    // klik na date expender 
    element.all(by.className('selected_date_value latest')).click();
    browser.sleep(2000);
 }
 
 function selectLatestDate() {
    // klik na datum
    element.all(by.css('.picker.expanded')).get(1).all(by.tagName('ul li')).get(4).click(); 
    browser.sleep(5000);
 }
 
 function clickOnDateExpender2() {
    // klik na date expender  
    element.all(by.className('selected_date_value earliest')).click();
    browser.sleep(2000);
 }
 
 function selectEarliestDate() {
    // klik na datum
    element.all(by.css('.picker.expanded')).all(by.tagName('ul li')).get(6).click(); 
    browser.sleep(5000);
 }
 
 function clickOnDownload() {
    // Download reporta
    element.all(by.className('download_link active')).click();
    browser.sleep(5000);
 }

 module.exports = {
    hoverToOpenDrop,
    landOnHomePage,
    clickOnLink,
    clickOnLunchButton,
    clickOnCategory1,
    clickOnExpender1,
    clickOnCategory3,
    clickOnExpender3,
    clickOnCategory6,
    clickOnExpender6,
    enterBankName1,
    clickOnSearchF,
    clickOnBank1,
    enterBankName2,
    clickOnBank2,
    clickOnSearchF2,
    clickOnDateExpender1,
    selectLatestDate,
    clickOnDateExpender2,
    selectEarliestDate,
    clickOnDownload,
    
}