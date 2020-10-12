function clickOnLink() {
    //  Klik na vendor_management link iz drop menu
    element(by.className('vendor_management')).click();
 }
 function checkVmUrl() {
    // Provera VM URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/vendor-management'), 7000);
}
function checkVMPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Vendor Management for Financial Institutions | CBANC'), 7000);
}
function checkDemoButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao demo button
    browser.wait(EC.textToBePresentInElement($('.demo_button'),'REQUEST A DEMO'), 7000);
    browser.sleep(2000);
}    
function checkPremiumAd(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitala Premium ad 
    browser.wait(EC.textToBePresentInElement($('.premium_ad'),'Unlock all of CBANC Premium to save even more!'), 7000);
    browser.sleep(2000);
}    

function clickRequestAdemo() {
    // klik na show me how kao public user
    element(by.className('demo_button')).click();
}

function enterPhoneNumber() {
    //  Unesi Phone numbera
    element(by.id('phone_number')).clear().sendKeys('333444555');
}

function clickOnSendToCbanc() {
    // Klik na submit button
    element(by.buttonText('Send to CBANC')).click();
}

function checkSucessMessageqa() {
    //  Cekiranje success poruke nakon slanja forme/prod
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.active'),"Thank You!We received your info and we'll be in touch soon."), 5000);
}

function backToQa() {
    browser.get('https://qa.cbancnetwork.com/vendor-management?success=true');
    browser.sleep(2000);
}

function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
 }

 function landOnVendorManagment() {
    browser.get('https://qa.cbancnetwork.com/vendor-management');
    browser.sleep(2000);
}

// function checkText1() {
//     // 
//     var EC = protractor.ExpectedConditions;
//     browser.wait(EC.textToBePresentInElement($('#main'),"Just the features you need, with none of the frills.Clunky, enterprise-level VM giving you headaches? We're here to help.Task scheduling & automated reminders Integrated risk assessment Unlimited vendors, contracts& users Specifically for community banks & CUsNo annual contract $0 upfront cost, no setup fee"), 5000);
// }

function checkText1() {
    // Provera cene
    var xxx = element.all(by.className('right')).get(0);
    expect(xxx.getText()).toEqual("Just the features you need, with none of the frills.\nClunky, enterprise-level VM giving you headaches? We're here to help.\nTask scheduling & automated reminders\nIntegrated risk assessment\nUnlimited vendors, contracts, & users\nSpecifically for community banks & CUs\nNo annual contract\n$0 upfront cost, no setup fee");
}

function checkText3() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.notifications'),'Rest easy with automated notifications.Tasks, alerts, and contract expiration notifications means you’ll never miss another important deadline.'), 5000);
}

function checkText2() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.risk_assessments'),'Built-in risk assessments your examiners will love.Quickly collect key data with a straightforward question-and-answer format. When you’re finished, simply export to our handy, pre-formatted report. Compliance support never looked so good.'), 5000);
}

function checkText4() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collaborate'),'Quickly collaborate with your coworkers.Share the workload with other employees at your institution with unlimited user seats.'), 5000);
}

function checkText5() {
    // 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.get_started'),'Get out of Excel in less than a week.Chat with our vendor management expert and get one step closer to a lightweight, easy-to-use solution.'), 5000);
}


module.exports = {
    clickOnLink,
    checkVMPageTitle,
    checkVmUrl,
    checkDemoButton,
    checkPremiumAd,
    clickRequestAdemo,
    enterPhoneNumber,
    clickOnSendToCbanc,
    checkSucessMessageqa,
    backToQa,
    HoverToOpenDrop,
    landOnVendorManagment,
    checkText1,
    checkText2,
    checkText3,
    checkText4,
    checkText5,
}