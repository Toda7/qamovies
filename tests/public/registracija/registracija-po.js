function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickSignUp() {
    element(by.id('cta_join_1')).click();
}

function checkJoinUrl() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/join/'), 7000);
}

function enterNewEmail() {
    element(by.name('email')).sendKeys('testuser03@hotmail.com');
}

function enterPass() {
    // element.all(by.xpath('//*[@id="main_content"]/div/div/form/div[1]/div[3]/input')).sendKeys('test1234');
    //element.all(by.css('.field.text_field.password')).then(function(){    ovo radi i ovo ispod
        element(by.name('password')).clear().sendKeys('test1234');
   // });
}

function confirmPass() {
    element.all(by.name('password')).get(1).clear().sendKeys('test1234');
    // element.all(by.xpath('/html/body/div[1]/div/div/div/div/form/div[1]/div[4]/input')).sendKeys('test1234');
}

function submit() {
    element(by.className('cta')).click();
}
function checkJoinSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su ucitali brojevi za financial institutions
    browser.wait(EC.textToBePresentInElement($('.page_content'), 'Welcome to CBANC Network!'), 7000);
}

module.exports = {
    landOnHomePage,
    clickSignUp,
    checkJoinUrl,
    enterNewEmail,
    enterPass,
    confirmPass,
    submit,
    checkJoinSuccess,
}