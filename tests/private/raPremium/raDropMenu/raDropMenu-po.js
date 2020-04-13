function clickToOpenDropMenu() {
    //  Click to open drop menu
    element(by.className('dropdown-button')).click();
    browser.sleep(2000);
 }
function checkLogoInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se logo ucitao u drop meniju
    browser.wait(EC.presenceOf($('.icon-cbanc_logo.grey-text')), 7000);
}
function checkCommunityLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao comunity link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-community.blue-text')), 7000);
}
function checkWorkspaceLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao workspace link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-file_vault.indigo-text.text-darken-2')), 7000);
}
function checkPeerAnalysisLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao peer analysis link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-peer_analysis.blue-grey-text')), 7000);
}
function checkRiskAssessmentLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao risk assessment link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-risk_assessments.green-text')), 7000);
}
function checkVendorManagmentLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao vendor managment link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-vendor_management.deep-purple-text')), 7000);
}
function checkEducationLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao education link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-education.amber-text.text-darken-2')), 7000);
}
function checkLendwellLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao lendwell link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-lendwell_logo.blue-text.text-darken-4')), 7000);
}
function checkCielostarLinkInDropMenu(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao cielostar link u drop meniju
    browser.wait(EC.presenceOf($('.left.icon-cielostar_logo.pink-text.text-lighten-1')), 7000);
}

 module.exports = {
    clickToOpenDropMenu,
    checkLogoInDropMenu,
    checkCommunityLinkInDropMenu,
    checkWorkspaceLinkInDropMenu,
    checkPeerAnalysisLinkInDropMenu,
    checkRiskAssessmentLinkInDropMenu,
    checkVendorManagmentLinkInDropMenu,
    checkEducationLinkInDropMenu,
    checkLendwellLinkInDropMenu,
    checkCielostarLinkInDropMenu,
 }