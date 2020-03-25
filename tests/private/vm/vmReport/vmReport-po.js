function clickOnBoardofDirectorsLink() {
    element(by.partialLinkText('Board of Directors')).click();
    browser.sleep(4000);
 }

 function checkReportPageTitle(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('CBANC Vendor Management Report'), 7000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera dal se ucitala Upload Complete message
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Vendor Management Report'), 7000);
}   

function checkCriticalSectionOnPage(){
    var EC = protractor.ExpectedConditions;
    expect($('.crtical').isPresent()).toBeTruthy();
}   

function checkHighSectionOnPage(){
    var EC = protractor.ExpectedConditions;
    expect($('.high').isPresent()).toBeTruthy();
}   

function checkMediumSectionOnPage(){
    var EC = protractor.ExpectedConditions;
    expect($('.medium').isPresent()).toBeTruthy();
}   

function checkLowSectionOnPage(){
    var EC = protractor.ExpectedConditions;
    expect($('.low').isPresent()).toBeTruthy();
}   

function checkTbdSectionOnPage(){
    var EC = protractor.ExpectedConditions;
    expect($('.tbd').isPresent()).toBeTruthy();
}   

function checkCrititalVendorDetailsSectionOnPage(){
    var EC = protractor.ExpectedConditions;
    expect($('.critical_details').isPresent()).toBeTruthy();
}   
 module.exports = {
    clickOnBoardofDirectorsLink,
    checkReportPageTitle,
    checkTitleOnPage,
    checkCriticalSectionOnPage,
    checkHighSectionOnPage,
    checkMediumSectionOnPage,
    checkLowSectionOnPage,
    checkTbdSectionOnPage,
    checkCrititalVendorDetailsSectionOnPage,
 }

