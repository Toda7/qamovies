function clickDoc() {
    // Klik na Dokument
    element(by.className('attachment txt')).click(); 
    browser.sleep(1000);
}

function clickDownload() {
    // Klik na Download dugme
    element(by.className('download_cta')).click(); 
    browser.sleep(3000);
}

function refreshPage() {
    //  Refreshuj stranu
    browser.refresh(); 
    browser.sleep(2000);
 }

 function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Dokument uspesno downloadovan
    browser.wait(EC.textToBePresentInElement($('.download_cta '), '1'), 7000);

    browser.sleep(2000);
 } 

  
 module.exports = {
    clickDoc,
    clickDownload,
    refreshPage,
    checkSuccess,
}