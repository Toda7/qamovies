function landOnAdvertiseGetStarted() {
    // dolazak na Certified Cannabis Banking Professional stranu 
    browser.get('https://qa.cbancnetwork.com/advertise/get-started'); 
    browser.sleep(2000);
}

function checkAdvertiseGetStartedTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Get Started Today with CBANC Marketing Solutions'), 7000);
}

function checkTitlesOnPage() {
    // Provera glavnog titla na strani 
    var xxx = element(by.className('top_content'));
    expect(xxx.getText()).toEqual("Want to learn more about CBANC's Marketing Solutions?\nFill in the form below and we will be in touch shortly.");
}

function enterFirstName(){
   //  Unesi text u first name field
   element(by.id('first_name')).clear().sendKeys('QA');
}

function enterLastName(){
   //  Unesi text u last name field
   element(by.id('last_name')).clear().sendKeys('Testing');
}

function enterGmail(){
    //  Unesi text u email field
    element(by.id('email')).clear().sendKeys('qa@testing.com');
}
 
function enterCompany(){
    //  Unesi text u company field
    element(by.id('company')).clear().sendKeys('QA Company');
}

function enterPhone(){
    //  Unesi numbers u phone field
    element(by.id('phone')).clear().sendKeys('555333');
}

module.exports = {
    landOnAdvertiseGetStarted,
    checkAdvertiseGetStartedTitle,
    checkTitlesOnPage,
    enterFirstName,
    enterLastName,
    enterGmail,
    enterCompany,
    enterPhone
}