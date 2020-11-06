function landOnPremiumPage() {
    browser.get('https://qa.cbancnetwork.com/premium');
    browser.sleep(2000);
}

function checkCbancPremiumtext() {
    //  
    var xxx = element(by.className('parallax'));
    expect(xxx.getText()).toEqual("CBANC Premium\nUnlock our all-in-one solution designed specifically for financial institutions - all at a fraction of the cost you’d typically pay, whether that’s in dollars or people hours.\nPremium Solutions help you:\nDelight your board of directors and examiners\nTrain employees\nStreamline operations and compliance efforts\nEnhance market intelligence\nAnd more\nSHOW ME HOW");
}

function checkBenefitsTitle() {
    //  
    var xxx = element(by.className('center premium_title'));
    expect(xxx.getText()).toEqual('Premium Benefits');
}

function checkClevelTitle() {
    //  
    var xxx = element(by.className('center middle_top_titles'));
    expect(xxx.getText()).toEqual('C-Level');
}

function checkManagmentTitle() {
    //  
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.management'), 'Management'), 5000);
}

function checkSolutionsTitle() {
    //  
    var xxx = element(by.className('center-align'));
    expect(xxx.getText()).toEqual('Premium Solutions');
}

function checkWorkspaceText() {
    //  Cekiranje texta u Workspace sekciji
    var xxx = element.all(by.className('col s12 m4 center-align solutions')).get(0);
    expect(xxx.getText()).toEqual('Workspace\nDocument collaboration tool to properly store, assign tasks, update files, and provide appropriate access to important FI docs');
}

function checkRiskACatalogText() {
    //  Cekiranje texta u Risk A. Catalog sekciji
    var xxx = element.all(by.className('col s12 m4 center-align solutions')).get(1);
    expect(xxx.getText()).toEqual('Risk Assessment Catalog\nReady to go assessments with easy reporting updated by experts\nLearn More');
}

function checkPolicyProcedureText() {
    //  Cekiranje texta u Policy/Procedure sekciji
    var xxx = element.all(by.className('col s12 m4 center-align solutions')).get(2);
    expect(xxx.getText()).toEqual('Policy / Procedure Checklist\n25 Comprehensive checklists created and updated by Sterling Compliance');
}

//dovrsiti cekere pre popunjavanja forme

function clickOnShowMeHow() {
    // klik na show me how kao public user
    element(by.className('btn-large green')).click();
}

function enterFirstName() {
    //  Unos first name
    element(by.id('first_name')).clear().sendKeys('test');
}

function enterLastName() {
    //  Unos last name
    element(by.id('last_name')).clear().sendKeys('user');
}

function enterEmail() {
    //  Unesi email-a
    element(by.id('email')).clear().sendKeys('test@mail.com');
}

function enterCompanyName() {
    //  Unesi Company name
    element(by.id('company')).clear().sendKeys('test company');
}

function enterPhoneNumber() {
    //  Unesi Phone numbera
    element(by.id('phone')).clear().sendKeys('333444555');
}

function clickOnSubmit() {
    // Klik na submit button
    element(by.buttonText('SUBMIT')).click();
}

function backToQa() {
    // povratak na qa 
    browser.get('https://qa.cbancnetwork.com/premium?success=true');
    browser.sleep(2000);
}

function checkSucessMessage1() {
    //  Cekiranje success poruke nakon slanja forme
    var xxx = element.all(by.className('center')).get(10);
    expect(xxx.getText()).toEqual('Thank You!');
}

function checkSucessMessage2() {
    //  Cekiranje success poruke nakon slanja forme
    var xxx = element.all(by.className('center')).get(11);
    expect(xxx.getText()).toEqual("We received your info and we'll be in touch soon.");
}

function checkInputFieldFirstName() {
    // Provera texta u First name input polju
    var inputValue = element(by.id('first_name'));
    expect(inputValue.getAttribute('value')).toEqual('Chicago Alberto');
}

function checkInputFieldLastName() {
    // Provera texta u Last name input polju
    var inputValue = element(by.id('last_name'));
    expect(inputValue.getAttribute('value')).toEqual('Diaz FI');
}

function checkInputFieldEmail() {
    // Provera texta u email input polju
    var inputValue = element(by.id('email'));
    expect(inputValue.getAttribute('value')).toEqual('1@chicago.com');
}

function checkInputFieldCompany() {
    // Provera texta u Company input polju
    var inputValue = element(by.id('company'));
    expect(inputValue.getAttribute('value')).toEqual('Bank of Chicago');
}

function clickOnUserMenu() {
    //  Klik na User meni
    element(by.className('user_name')).click();
}

function clickOnSignOut() {
    // klik na sign out
    element(by.className('sign_out')).click();
}

function clickOnRequestAdemo() {
    //klik na request a demo kao ulogovani user
    element.all(by.className('btn-large green')).get(1).click();
}

function checkWorkspaceAvatar() {
    // Provera da li je dobar GF logo na print order strani
    var xxx = element (by.className('icon_default file_vault'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/premium/file_vault.svg');
    browser.sleep(500);
 }

 function checkRaSolutionsAvatar() {
    // Provera da li je dobar GF logo na print order strani
    var xxx = element (by.className('icon_default risk_assessment'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/premium/risk_assessment.svg');
    browser.sleep(500);
 }

 function checkPolicyProcedureAvatar() {
    // Provera da li je dobar GF logo na print order strani
    var xxx = element (by.className('icon_default checklist'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/premium/checklist.svg');
    browser.sleep(500);
 }

 function checkVmAvatar() {
    // Provera da li je dobar GF logo na print order strani
    var xxx = element (by.className('icon_default vendor_management'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/premium/vendor_management.svg');
    browser.sleep(500);
 }

 function checkPeerAAvatar() {
    // Provera da li je dobar GF logo na print order strani
    var xxx = element (by.className('icon_default peer_analysis'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/premium/peer_analysis.svg');
    browser.sleep(500);
 }

 function checkAllAccessAvatar() {
    // Provera da li je dobar GF logo na print order strani
    var xxx = element (by.className('icon_default education'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/premium/education.svg');
    browser.sleep(500);
 }



module.exports = {
    landOnPremiumPage,
    checkCbancPremiumtext,
    checkBenefitsTitle,
    checkClevelTitle,
    checkManagmentTitle,
    checkSolutionsTitle,
    checkWorkspaceText,
    checkRiskACatalogText,
    checkPolicyProcedureText,
    clickOnShowMeHow,
    enterFirstName,
    enterLastName,
    enterEmail,
    enterCompanyName,
    enterPhoneNumber,
    clickOnSubmit,
    backToQa,
    checkSucessMessage1,
    checkSucessMessage2,
    checkInputFieldFirstName,
    checkInputFieldLastName,
    checkInputFieldEmail,
    checkInputFieldCompany,
    clickOnUserMenu,
    clickOnSignOut,
    clickOnRequestAdemo,
    checkWorkspaceAvatar,
    checkRaSolutionsAvatar,
    checkPolicyProcedureAvatar,
    checkVmAvatar,
    checkPeerAAvatar,
    checkAllAccessAvatar,
}