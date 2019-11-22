function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
    browser.sleep(2000);
}

function findDiscussion() {
    // Pronadji napravljenu diskusiju i klikni
    element(by.className('title', 'ATQA')).click(); 
    browser.sleep(1000);
}
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
    browser.wait(EC.textToBePresentInElement($('.download_cta '), '1'), 5000);

    browser.sleep(2000);
 } 

  
 module.exports = {
    landOnFIProfessionalsHome,
    findDiscussion,
    clickDoc,
    clickDownload,
    refreshPage,
    checkSuccess,
}