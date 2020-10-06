function checkPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC | The professional network for the banking industry.'), 7000);
}

function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao join button 
    browser.wait(EC.textToBePresentInElement($('#cta_join_1'), 'JOIN FOR FREE'), 7000);
    browser.sleep(2000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('.hero_content'), 'Answers for every bank and credit union'), 7000);
}

function checkNumbersOfDownloads(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za downloads
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '3MM+'), 7000);
}

function checkNumberOfAnswers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za answers
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '100K'), 7000);
}

function checkNumbersOfFinancialInstitutions(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za financial institutions
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '8600+'), 7000);
    browser.sleep(2000);
}

function checkDocImage() {
    // Provera da li se ucitao document icon 
    var xxx = element(by.className('doc'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/home/doc-icon.svg');
    browser.sleep(500);
}

function checkDocumentSection() {
    // Provera document section
    var xxx = element.all(by.className('icon')).get(0);
    expect(xxx.getText()).toEqual('ACCESS THOUSANDS OF POLICY DOCUMENTS.\nGet tried-and-true resources used by bank and credit union employees across the U.S.');
}

function checkPeersImage() {
    // Provera da li se ucitao peers icon 
    var xxx = element(by.className('peers'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/home/peers-icon.svg');
    browser.sleep(500);
}

function checkPeersSection() {
    // Provera peers section
    var xxx = element.all(by.className('icon')).get(1);
    expect(xxx.getText()).toEqual('CONNECT WITH INDUSTRY PEERS.\nFind answers to your toughest questions from the largest verified network of FI professionals.');
}

function checkVendorImage() {
    // Provera da li se ucitao Vendor icon 
    var xxx = element(by.className('vendor'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/home/vendor-icon.svg');
    browser.sleep(500);
}

function checkVendorSection() {
    // Provera Vendor section
    var xxx = element.all(by.className('icon')).get(2);
    expect(xxx.getText()).toEqual('RESEARCH VENDORS AND PRODUCTS.\nGet valuable insights on hundreds of products and services.');
}

function checkBottomSection(){
    // Provera da li se ucitao bottom section
    var xxx = element(by.className('bottom_section'));
    expect(xxx.getText()).toEqual('Join the largest online network of verified banking and credit union professionals.\nGet your questions answered, exchange ideas, and build your industry reputation.\nJOIN FOR FREE');
}

// Chekeri za Header linkove 
function checkCBlogoInHeader() {
    // Provera da li se ucitao Cbanc Logo u headeru
    var xxx = element.all(by.tagName('img')).get(0);
    expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/0.0.1/img/cbanc-logo-transparent.svg');
 }

function clickOnLogo() {
    //  Klik na Logo u headeru
     element(by.id("logo")).click();
}

 function checkHomeURL() {
    // Provera home URL-a nakon klika na logo
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com'), 7000);
}

function checkLinksInHeader(){
    // Provera da li su se ucitali Community, Education, More, Vendors linkovi i JOIN i SIGN IN buttni u headeru
    var xxx = element(by.className('header_main'));
    expect(xxx.getText()).toEqual('Community\nEducation\nMore\nVendors\nJOIN\nSIGN IN');
}

function clickOnCommunity() {
    //  Klik na Community u headeru
     element(by.className("menu_item link_community has_submenu")).click();
 }

function HoverToOpenCommunityDrop() {
    // Hover to open Community drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_community.has_submenu'))).perform();
    // expect(element(by.css('.menu_item.link_community.has_submenu')).isDisplayed()).toBeTruthy();
}

function checkSubmenuSectionFromCommunityDrop(){
    // Provera submenu sekcije u Comunity drop downu
    var xxx = element(by.className('submenu'));
    expect(xxx.getText()).toEqual('DOCUMENT LIBRARY\nA searchable, sortable archive of the documents uploaded to CBANC.\nGET ANSWERS\nThe latest discussions in the CBANC community.\nTOPICS\nThe most popular topics on CBANC. Subscribe to the ones that interest you.');
}

function clickOnDocumentLink() {
    //  Klik na Document link iz Community drop down menu
     element(by.className("documents")).click();
}

 function checkDocumentsURL() {
    // Provera document URL-a nakon klika na Documents link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/documents'), 7000);
}

function clickOnTopicsLink() {
    //  Klik na topics link iz Community drop down menu
     element(by.className("topics")).click();
}

 function checkTopicssURL() {
    // Provera Topics URL-a nakon klika na topicss link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/topics'), 7000);
}

function clickOnQuestionsLink() {
    //  Klik na questions link iz Community drop down menu
     element(by.className("questions")).click();
}

 function checkQuestionsURL() {
    // Provera questions URL-a nakon klika na questionss link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/questions'), 7000);
}

function clickOnEducationLink() {
    //  Klik na Education u headeru
     element(by.className("menu_item link_education has_submenu")).click();
 }

 function checkEducationURL() {
    // Provera Education URL-a nakon klika na education link u headeru
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/cbanc-education'), 7000);
}

function HoverToOpenEducationDrop() {
    // Hover to open Education drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_education.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_education.has_submenu')).isDisplayed()).toBeTruthy();
}

function checkSubmenuSectionFromEducationyDrop(){
    // Provera submenu sekcije u Education drop downu
    var xxx = element.all(by.className('submenu')).get(1);
    expect(xxx.getText()).toEqual('TRAINING - NEW!\nEnroll in CBANC and partners online certification training programs.\nUPCOMING WEBINARS\nThe best content delivered live, offered with CPE credits, from experts in the financial industry.\nBUNDLES\nIncrease your professional value with these curated, on demand bundled webinars.\nON DEMAND\nDiscover a past webinar or replay webinar - including content from the ABA - on your schedule.\nALL-ACCESS PLUS\nThe most cost effective training for your entire financial institution.\nORDERS\nSee your order history, print CPE certificates and receipts, etc.');
}

function clickOnTrainingLink() {
    //  Klik na Training link iz Education drop down menu
     element(by.className("lms_training")).click();
}

function checkTitleInSignInForm(){
    // Provera Titla na Sign in strani, ovo radim da bih imao duzi wait jer dugo vremena treba da se ucita training strana
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.auth0-lock-name'), 'CBANC Training'), 20000);
}

function clickOnUpcomingLink() {
    //  Klik na Upcoming Webinars link iz Education drop down menu
     element(by.className("events")).click();
}

function checkUpcomingURL() {
    // Provera Upcoming URL-a nakon klika na Upcoming Webinars link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/webinars/calendar'), 7000);
}

function clickOnBundlesLink() {
    //  Klik na Bundles link iz Education drop down menu
     element(by.className("bundles")).click();
}

function checkBundlesURL() {
    // Provera Bundles URL-a nakon klika na Bundles link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/bundles'), 7000);
}

function clickOnOnDemandLink() {
    //  Klik na OnDemand link iz Education drop down menu
     element(by.className("ondemand")).click();
}

function checkOnDemandURL() {
    // Provera OnDemand URL-a nakon klika na OnDemand link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/webinars/on_demand'), 7000);
}

function clickOnAllAccessLink() {
    //  Klik na All Access link iz Education drop down menu
     element(by.className("all_access_plus")).click();
}

function checkAllAccessURL() {
    // Provera All Access URL-a nakon klika na All Access link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/cbanc-education'), 7000);
}

function clickOnOrdersLink() {
    //  Klik na Orders link iz Education drop down menu
     element(by.className("orders")).click();
}

function checkOrdersURL() {
    // Provera Orders URL-a nakon klika na Orders link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/orders/my_orders'), 7000);
}

function clickOnMoreLink() {
    //  Klik na More link u headeru
     element(by.className("menu_item link_apps has_submenu")).click();
 }

 function checkMoreURL() {
    // Provera More URL-a nakon klika na More link u headeru
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/vendor-management'), 7000);
}

function HoverToOpenMoreDrop() {
    // Hover to open More drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
}

function checkSubmenuSectionFromMoreyDrop(){
    // Provera submenu sekcije u More drop downu
    var xxx = element.all(by.className('submenu')).get(2);
    expect(xxx.getText()).toEqual('VENDOR MANAGEMENT\nCompliance management application for banks and credit unions.\nRISK ASSESSMENT\nFree, secure risk analysis tool for banks and credit unions.\nPEER ANALYSIS\nCustom peer group analysis for free.\nMORTGAGE SETTLEMENT SERVICES\nIntegrated mortgage settlement services software and provider marketplace.');
}

function clickOnVendorManagementLink() {
    //  Klik na vendor management link iz Education drop down menu
     element(by.className("vendor_management")).click();
}

function checkVendorManagementURL() {
    // Provera vendor management URL-a nakon klika na vendor management link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/vendor-management'), 7000);
}

function clickOnRiskAssessmentLink() {
    //  Klik na Risk Assessment link iz Education drop down menu
     element(by.className("risk_assessment")).click();
}

function checkRiskAssessmentURL() {
    // Provera Risk Assessment URL-a nakon klika na Risk Assessment link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/risk_assessment'), 7000);
}

function clickOnPeerAnalysisLink() {
    //  Klik na Peer Analysis link iz Education drop down menu
     element(by.className("peer_group_analysis")).click();
}

function checkPeerAnalysisURL() {
    // Provera Peer Analysis URL-a nakon klika na Peer Analysis link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer-group-analysis'), 7000);
}

function clickOnLendwellLink() {
    //  Klik na Lendwell link iz Education drop down menu
     element(by.className("lendwell")).click();
}

function checkLendwellURL() {
    // Provera Lendwell URL-a nakon klika na Lendwell link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/lendwell'), 7000);
}

function clickOnVendorLink() {
    //  Klik na Vendor link u headeru
     element(by.className("menu_item link_viewfinder")).click();
}

function checkVendorURL() {
    // Provera Vendor URL-a nakon klika na Vendor link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/view-finder'), 7000);
}

function clickOnSignInButton() {
    //  Klik na Sign In button u headeru
     element(by.className("sign_in")).click();
}

function clickOnJoinButton() {
    //  Klik na Join button u headeru
     element(by.className("join")).click();
}

function checkJoinURL() {
    // Provera Join URL-a nakon klika na Join button 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/join/'), 7000);
}

// chekeri za footer 

function checkFooter(){
    // Provera footer sekcije
    var xxx = element(by.id('footer'));
    expect(xxx.getText()).toEqual('About FAQ Contact Vendors Careers Blog\nPrivacy Policy Terms of Service Code of Conduct\nCopyright 2008 - 2020 CBANC Network. All rights reserved.');
}

function clickOnAboutLink() {
    //  Klik na About link u footer
    element(by.partialLinkText('About')).click();
}

function checkAboutURL() {
    // Provera About URL-a nakon klika na About link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/about'), 7000);
}

function clickOnFAQLink() {
    //  Klik na FAQ link u footer
    element(by.partialLinkText('FAQ')).click();
}

function checkFAQURL() {
    // Provera FAQ URL-a nakon klika na FAQ link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://support.cbancnetwork.com/hc/en-us'), 7000);
}

function clickOnContactLink() {
    //  Klik na Contact link u footer
    element(by.partialLinkText('Contact')).click();
}

function checkContactURL() {
    // Provera Contact URL-a nakon klika na Contact link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/support'), 7000);
}

function clickOnVendorstLink() {
    //  Klik na Vendorst link u footer
    element(by.partialLinkText('Vendors')).click();
}

function checkVendorstURL() {
    // Provera Vendors URL-a nakon klika na Vendors link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/view-finder'), 7000);
}

function clickOnCareersLink() {
    //  Klik na Careers link u footer
    element(by.partialLinkText('Careers')).click();
}

function checkCareersURL() {
    // Provera Careers URL-a nakon klika na Careers link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/careers'), 7000);
}

function clickOnBlogLink() {
    //  Klik na Blog link u footer
    element(by.partialLinkText('Blog')).click();
}

function checkBlogURL() {
    // Provera Blog URL-a nakon klika na Blog link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/blog'), 7000);
}

function clickOnPrivacyPolicyLink() {
    //  Klik na Privacy Policy link u footer
    element(by.partialLinkText('Privacy Policy')).click();
}

function checkPrivacyPolicyURL() {
    // Provera Privacy Policy URL-a nakon klika na Privacy Policy link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/support/privacy_policy'), 7000);
}

function clickOnTermsofServiceLink() {
    //  Klik na Terms of Service link u footer
    element(by.partialLinkText('Terms of Service')).click();
}

function checkTermsofServiceURL() {
    // Provera Terms of Service URL-a nakon klika na Terms of Service link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/support/terms_of_service'), 7000);
}

function clickOnCodeOfConductLink() {
    //  Klik na Code of Conduct link u footer
    element(by.partialLinkText('Code of Conduct')).click();
}

function checkCodeOfConductURL() {
    // Provera Code of Conduct URL-a nakon klika na Code of Conduct link 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/support/code_of_conduct'), 7000);
}

module.exports = {
    checkPageTitle,
    checkButton,
    checkTitleOnPage,
    checkNumbersOfDownloads,
    checkNumberOfAnswers,
    checkNumbersOfFinancialInstitutions,
    checkDocImage,
    checkDocumentSection,
    checkPeersImage,
    checkPeersSection,
    checkVendorImage,
    checkVendorSection,
    checkBottomSection,
    checkCBlogoInHeader,
    clickOnLogo,
    checkHomeURL,
    checkLinksInHeader,
    clickOnCommunity,
    HoverToOpenCommunityDrop,
    checkSubmenuSectionFromCommunityDrop,
    clickOnDocumentLink,
    checkDocumentsURL,
    clickOnTopicsLink,
    checkTopicssURL,
    clickOnQuestionsLink,
    checkQuestionsURL,
    clickOnEducationLink,
    checkEducationURL,
    HoverToOpenEducationDrop,
    checkSubmenuSectionFromEducationyDrop,
    clickOnTrainingLink,
    checkTitleInSignInForm,
    clickOnUpcomingLink,
    checkUpcomingURL,
    clickOnBundlesLink,
    checkBundlesURL,
    clickOnOnDemandLink,
    checkOnDemandURL,
    clickOnAllAccessLink,
    checkAllAccessURL,
    clickOnOrdersLink,
    checkOrdersURL,
    clickOnMoreLink,
    checkMoreURL,
    HoverToOpenMoreDrop,
    checkSubmenuSectionFromMoreyDrop,
    clickOnVendorManagementLink,
    checkVendorManagementURL,
    clickOnRiskAssessmentLink,
    checkRiskAssessmentURL,
    clickOnPeerAnalysisLink,
    checkPeerAnalysisURL,
    clickOnLendwellLink,
    checkLendwellURL,
    clickOnVendorLink,
    checkVendorURL,
    clickOnSignInButton,
    clickOnJoinButton,
    checkJoinURL,
    checkFooter,
    clickOnAboutLink,
    checkAboutURL,
    clickOnFAQLink,
    checkFAQURL,
    clickOnContactLink,
    checkContactURL,
    clickOnVendorstLink,
    checkVendorstURL,
    clickOnCareersLink,
    checkCareersURL,
    clickOnBlogLink,
    checkBlogURL,
    clickOnPrivacyPolicyLink,
    checkPrivacyPolicyURL,
    clickOnTermsofServiceLink,
    checkTermsofServiceURL,
    checkTermsofServiceURL,
    clickOnCodeOfConductLink,
    checkCodeOfConductURL,
}
