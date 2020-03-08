function landOnDocsLibraryPage() {
    // Dolazak na Documents Library page
    browser.get('https://qa.cbancnetwork.com/community/documents');
    browser.sleep(2000);
}

function checkPageTitle() {
    // Provera page title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('Document Library - CBANC'), 5000);
}

function checkBreadcrumbs() {
    // Provera da li se ucitao breadcrumbs
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.nav_title'), 'Document Library'), 5000);
}

function checkSearchInHeader() {
    // Provera da li se placeholder in search field 
    var xxx = element(by.className('search_button'));
    expect(xxx.getText()).toEqual('Search');
}

function clickOnSearchField() {
    // Klik na search field da dobijemo search stranu
    element(by.className('search_button')).click();
}

function checkSearchURL() {
    // Provera da li se ucitao search URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/search?q='), 5000);
}

function checkForYouInSideMenu() {
    // Provera da li se ucitao FOR YOU link u side meniju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'For You'), 5000);
}

function clickOnForYouLink() {
    // Klik na For You link 
    element(by.partialLinkText('For You')).click();
}

function checkForYouURL() {
    // Provera da li se ucitao For You URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/home?filter=home&tab=latest'), 5000);
}

function checkDiscoverInSideMenu() {
    // Provera da li se ucitao Discover link u side meniju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'Discover'), 5000);
}

function clickOnDiscoverLink() {
    // Klik na Discover link 
    element(by.partialLinkText('Discover')).click();
}

function checkDiscoverURL() {
    // Provera da li se ucitao Discover URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/topics?s=popularity'), 5000);
}

function checkDocumentLibraryInSideMenu() {
    // Provera da li se ucitao Document Library link u side meniju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'Document Library'), 5000);
}

function clickOnDocumentLibraryLink() {
    // Klik na Document Library link 
    element(by.partialLinkText('Document Library')).click();
}

function checkDocumentLibraryURL() {
    // Provera da li se ucitao Document Library URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents'), 5000);
}

function checkVendorDirectoryInSideMenu() {
    // Provera da li se ucitao Vendor Directory link u side meniju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'Vendor Directory'), 5000);
}

function clickOnVendorDirectoryLink() {
    // Klik na Vendor Directorylink 
    element(by.partialLinkText('Vendor Directory')).click();
}

function checkVendorDirectoryURL() {
    // Provera da li se ucitao Vendor Directory URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/vendors'), 5000);
}

function checkReputationTimelineInSideMenu() {
    // Provera da li se ucitao Reputation Timeline link u side meniju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'Reputation Timeline'), 5000);
}

function clickOnReputationTimelineLink() {
    // Klik na Reputation Timeline link 
    element(by.partialLinkText('Reputation Timeline')).click();
}

function checkReputationTimelineURL() {
    // Provera da li se ucitao Reputation Timeline URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/reputation'), 5000);
}

function checkInviteColleaguesInSideMenu() {
    // Provera da li se ucitao Invite Colleagues link u side meniju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'Invite Colleagues'), 5000);
}

function clickOnInviteColleagueseLink() {
    // Klik na Invite Colleagues link 
    element(by.partialLinkText('Invite Colleagues')).click();
}

function checkInviteColleagueseURL() {
    // Provera da li se ucitao Invite Colleagues URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/invite'), 5000);
}

function checkMyGroupsTitle() {
    // Provera da li se ucitao My Groups title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'My Groups'), 5000);
}

function checkFIProfessionalsGroup() {
    // Provera da li se ucitala FI grupa
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page_menu'), 'FI Professionals'), 5000);
}

function clickOnFIProfessionalsLink() {
    // Klik na FI Professionals link 
    element(by.partialLinkText('FI Professionals')).click();
}

function checkFIProfessionalsURL() {
    // Provera da li se ucitao FI Professionals URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'), 5000);
}

function checkPlaceholderInSearch() {
    // Provera da li se placeholder in search field 
    // var EC = protractor.ExpectedConditions;
    // browser.wait(EC.textToBePresentInElement($('.input-field search_field'), 'Search Documents'), 5000);
    var xxx = element(by.className('input-field search_field'));
    expect(xxx.getText()).toEqual('Search Documents');
}

function checkStartDiscussionButton() {
    // Provera da li se START DISCUSSION button ucitao na strani
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.fixed-action-btn.start_discussion'), 'START DISCUSSION'), 5000);
}

function clickStartDiscussionButton() {
    // Klik na START DISCUSSION button
    element(by.className('btn-floating btn-large z-depth-3')).click();
}

function checkCreateDiscussionURL() {
    // Provera da li se ucitao Create Discussion URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/discussions/create'), 5000);
}

function checkPollHeader() {
    // Provera da li se poll header ucitao
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection.with-header.user_poll'), 'CBANC Poll'), 5000);
}

function checkPollTitle() {
    // Provera da li se poll title ucitao u iframe
    var xxx = element(by.className('title-text'));
    expect(xxx.getText()).toEqual('Testing_Jennifer');
}

function checkFirstQuestion() {
    // Provera da li se ucitalo prvo pitanje
    var xxx = element(by.className('question-title-container'));
    expect(xxx.getText()).toEqual('1. In 2018, will you be relying more or less on the online channel for relationship building and product sales compared to 2017?');
}

function checkFirstRadioButton() {
    // Provera da li se prvi radio button u prvom pitanju'
    var xxx = element(by.className('radio-button-label-text question-body-font-theme user-generated'));
    expect(xxx.getText()).toEqual('A great deal more');
}

function checkThirdQuestion() {
    // Provera da li se ucitalo trece pitanje
    var xxx = element.all(by.className('question-title-container')).get(2);
    expect(xxx.getText()).toEqual('3. How many specific, dedicated, online channel educational campaigns (i.e. bill pay, PFM, cash management) did you run in 2017?');
}

function checkRadioButtonInThirdQuestion() {
    // Provera da li se ucitalo sesti radio button u trecem pitanju
    var xxx = element.all(by.className('radio-button-label-text question-body-font-theme user-generated')).get(13);
    expect(xxx.getText()).toEqual('More than Twelve');
}

module.exports = {
    landOnDocsLibraryPage,
    checkPageTitle,
    checkBreadcrumbs,
    checkSearchInHeader,
    clickOnSearchField,
    checkSearchURL,
    checkForYouInSideMenu,
    clickOnForYouLink,
    checkForYouURL,
    checkDiscoverInSideMenu,
    clickOnDiscoverLink,
    checkDiscoverURL,
    checkDocumentLibraryInSideMenu,
    clickOnDocumentLibraryLink,
    checkDocumentLibraryURL,
    checkVendorDirectoryInSideMenu,
    clickOnVendorDirectoryLink,
    checkVendorDirectoryURL,
    checkReputationTimelineInSideMenu,
    clickOnReputationTimelineLink,
    checkReputationTimelineURL,
    checkInviteColleaguesInSideMenu,
    clickOnInviteColleagueseLink,
    checkInviteColleagueseURL,
    checkMyGroupsTitle,
    checkFIProfessionalsGroup,
    clickOnFIProfessionalsLink,
    checkFIProfessionalsURL,
    checkPlaceholderInSearch,
    checkStartDiscussionButton,
    clickStartDiscussionButton,
    checkCreateDiscussionURL,
    checkPollHeader,
    checkPollTitle,
    checkFirstQuestion,
    checkFirstRadioButton,
    checkThirdQuestion,
    checkRadioButtonInThirdQuestion,
}