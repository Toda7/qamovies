function undoDelete() {
   // Undo delete discussion
   element(by.className('sb_action', 'UNDO')).click(); 
   browser.sleep(1000);
}

function checkSuccess(){
  var EC = protractor.ExpectedConditions;
  // Provera da li je uspesan undo brisanja diskusije
  browser.wait(EC.textToBePresentInElement($('.html_content'), 'ATQA Description description testing credit'), 3000);
  browser.sleep(2000);
}  

module.exports = {
   undoDelete,
   checkSuccess,
}