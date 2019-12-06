function clickStartNewLink() {
    //  Klik na Start New 
        element.all(by.css('.card.horizontal')).get(1).element(by.partialLinkText('CREATE NEW')).click();
    // element.all(by.css('.card.horizontal')).get(1).all(by.tagName('a')).get(0).click(); 
    // element(by.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div[2]/div[2]/a')).click();
    browser.sleep(2000);
 }
function checkTitleOfTemplate(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title of template
    browser.wait(EC.textToBePresentInElement($('.card-content.top_content'), 'Sima Template - 1 Risk Assessment'), 5000);
}   
function checkFirstTitleOfQuestion(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title za prvo pitanje
    browser.wait(EC.textToBePresentInElement($('.collection-item.inherent_risk'), 'Inherent Risk'), 5000);
}   
function enterTextInTheAnswerField() {
    // Unosenje texta u answer polje
    element(by.className('materialize-textarea')).sendKeys('Answer on first question');
    browser.sleep(2000);
}
function clickContinueLink() {
    //  Klik na Continue button
    element(by.className('btn')).click();
    browser.sleep(2000);
 }
 function checkSecondTitleOfQuestion(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title za drugo pitanje
    browser.wait(EC.textToBePresentInElement($('.collection-item.controls'), 'Controls'), 5000);
}   
 function enterTextInTheSecondAnswerField() {
    // Unosenje texta u drugo answer polje
    element(by.className('materialize-textarea')).sendKeys('Answer on second question');
    browser.sleep(2000);
}
function checkThirdTitleOfQuestion(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title za trece pitanje
    browser.wait(EC.textToBePresentInElement($('.collection-item.residual_risk'), 'Residual Risk & Mitigation Steps'), 5000);
}   
function enterTextInTheThirdAnswerField() {
    // Unosenje texta u trece answer polje
    element(by.className('materialize-textarea')).sendKeys('Answer on third question');
    browser.sleep(2000);
}
function clickCloseLink() {
    //  Klik na Close link
    element(by.className('material-icons close_button')).click();
    browser.sleep(2000);
 }
 function checkInProgressURL() {
    // Provera da li smo dobili InProgress stranu, provera URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/ra/b0fcf98f-a435-4c19-bae0-bb9b15bb94b4/in_progress'), 5000);
    browser.sleep(2000);
}
function checkTemplateInProgress(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio template koji smo zapoceli - treba da bude na in progress strani
    browser.wait(EC.textToBePresentInElement($('.truncate'), 'Sima Template - 1'), 5000);
}   

function checkFirstAnswer() {
    var EC = protractor.ExpectedConditions;
    // Unosenje prvog text u polje
    browser.wait(EC.textToBePresentInElement($('.input-field'), 'Answer on first question'), 5000);
    browser.sleep(2000);
}

function checkSecondAnswer() {
    var EC = protractor.ExpectedConditions;
    // Unosenje prvog text u polje
    browser.wait(EC.textToBePresentInElement($('.input-field'), 'Answer on second question'), 5000);
    browser.sleep(2000);
}

function checkThirdAnswer() {
    var EC = protractor.ExpectedConditions;
    // Unosenje prvog text u polje
    browser.wait(EC.textToBePresentInElement($('.input-field'), 'Answer on third question'), 5000);
    browser.sleep(2000);
}

module.exports = {
    clickStartNewLink,
    checkTitleOfTemplate,
    checkFirstTitleOfQuestion,
    enterTextInTheAnswerField,
    clickContinueLink,
    checkSecondTitleOfQuestion,
    enterTextInTheSecondAnswerField,
    checkThirdTitleOfQuestion,
    enterTextInTheThirdAnswerField,
    clickCloseLink,
    checkInProgressURL,
    checkTemplateInProgress,
    checkFirstAnswer,
    checkSecondAnswer,
    checkThirdAnswer,
}