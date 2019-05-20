function landOnPage() {
    browser.get('https://qa.cbancnetwork.com'); 
}

function clickSignUp() {
    element(by.id('cta_join_1')).click();
}

function checkJoinUrl() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/join/'), 5000);
}

function enterEmail() {
    element(by.name('email')).sendKeys('pera2@hotmail.com');
}

function enterPass() {
    element.all(by.xpath('//*[@id="main_content"]/div/div/form/div[1]/div[3]/input')).sendKeys('test1234');
    //element.all(by.css('.field.text_field.password')).then(function(){    ovo radi i ovo ispod
        //element(by.name('password')).clear().sendKeys('test1234');
   // });
}

function confirmPass() {
    element.all(by.xpath('/html/body/div[1]/div/div/div/div/form/div[1]/div[4]/input')).sendKeys('test1234');
}

function submit() {
    element(by.className('cta')).click();
}

module.exports = {
    landOnPage,
    clickSignUp,
    checkJoinUrl,
    enterEmail,
    enterPass,
    confirmPass,
    submit
}