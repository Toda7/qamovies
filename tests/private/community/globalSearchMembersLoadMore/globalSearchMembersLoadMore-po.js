function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('user');
   browser.sleep(2000);
}

 module.exports = {
   enterSearchWord,
 }