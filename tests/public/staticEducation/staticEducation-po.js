function landOnEducation() {
    // Dolazak na Education stranu 
    browser.get('https://qa.cbancnetwork.com/cbanc-education'); 
    browser.sleep(3000);
}

function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
}

function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
}

function checkPageTitle() {
    // Provera Page Title-a  
    var xxx = element(by.className('hero_text_wrapper')).element(by.tagName('h1'));
    expect(xxx.getText()).toEqual('Training for your Entire Financial Institution, now with CPE credits!');
    browser.sleep(500);
}

function checkTextBelowTitle() {
    // Provera texta ispod title-a
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('hero_p'));
    browser.wait(EC.textToBePresentInElement(c, "Provide your entire institution with relevant and timely training for all positions with a CBANC All-Access Plus subscription. The 12-month subscription can start at any time."), 5000);
}

function checkListedText() {
    // Provera Texta u bullitima  
    var xxx = element(by.className('hero_list'));
    expect(xxx.getText()).toEqual('Over 700 recorded titles\nBetween 18-25 live events per month\nOn-demand access to supplemental documents and presentation slides\nPrintable certificate of completion\nCPE and/or AAP credits if attended live');
    browser.sleep(500);
}

function clickOnVTCButton() {
    // Klik na View The Calendar button 
    element.all(by.className('button hero_cta')).get(1).click(); 
    browser.sleep(3000);
}

function checkCalendarURL() {
    // Provera da li se ucitala Calendar strana
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://qa.cbancnetwork.com/education/webinars/calendar"), 3000);
}

function checkFandFTitle() {
    // Provera Freedom and Flexibility Title-a  
    var xxx = element(by.className('freedom')).element(by.tagName('h2'));
    expect(xxx.getText()).toEqual('Freedom and Flexibility');
    browser.sleep(500);
}

function checkCalendarImage() {
    // Provera calendar slike
    var xxx = element(by.className('block')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/cbanc-education/calendar.svg');
    browser.sleep(500);
}

function checkCalendarText() {
    // Provera texta ispod calendar slike
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('text'));
    browser.wait(EC.textToBePresentInElement(c, "200+ live webinars per year"), 5000);
}

function checkLightballImage() {
    // Provera lightball slike
    var xxx = element.all(by.className('block')).get(1).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/cbanc-education/idea.svg');
    browser.sleep(500);
}

function checkLightballText() {
    // Provera texta ispod calendar slike
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('text')).get(1);
    browser.wait(EC.textToBePresentInElement(c, "Download supplemental documents & presentation slides"), 5000);
}

function checkAnaliticImage() {
    // Provera analitic slike
    var xxx = element.all(by.className('block')).get(2).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/cbanc-education/analytics.svg');
    browser.sleep(500);
}

function checkAnaliticText() {
    // Provera texta ispod analitic slike
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('text')).get(2);
    browser.wait(EC.textToBePresentInElement(c, "Printable certificate of completion"), 5000);
}

function checkTargetImage() {
    // Provera target slike
    var xxx = element.all(by.className('block')).get(3).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/cbanc-education/target.svg');
    browser.sleep(500);
}

function checkTargetText() {
    // Provera texta ispod target slike
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('text')).get(3);
    browser.wait(EC.textToBePresentInElement(c, "Many events earn CPE and/or AAP credits"), 5000);
}

function checkTopicAreasText() {
    // Provera Title-a uz chart sliku  
    var xxx = element(by.className('topics separator'));
    expect(xxx.getText()).toEqual('Topic Areas include these and more:');
    browser.sleep(500);
}

function checkLeftList() {
    // Provera leve strane liste  
    var xxx = element(by.className('left_list'));
    expect(xxx.getText()).toEqual('ACH\nAudit\nBSA/AML\nBusiness Continuity\nCollateral\nCommercial Accounts\nCredit\nCybersecurity\nDisaster Recovery');
    browser.sleep(500);
}

function checkRightList() {
    // Provera desne strane liste  
    var xxx = element(by.className('right_list'));
    expect(xxx.getText()).toEqual('Due Diligence\nERM\nFFIEC\nFraud\nMarijuana Related Business\nNACHA\nPayments\nRDC\nVendor Management');
    browser.sleep(500);
}

function checkHowToJoinText() {
    // Provera How To Join texta  
    var xxx = element.all(by.className('topics separator')).get(1);
    expect(xxx.getText()).toEqual('How to join:');
    browser.sleep(500);
}

function checkPurchaseText() {
    // Provera purchase texta  
    var xxx = element(by.className('purchase_container')).element(by.tagName('h4'))
    expect(xxx.getText()).toEqual('Purchase access to the entire upcoming and back catalog of CBANC events for your entire Institution.');
    browser.sleep(500);
}

function checkTableTitle() {
    // Provera table title-a  
    var xxx = element(by.className('table_titles')).element(by.tagName('b'));
    expect(xxx.getText()).toEqual('All Access Plus');
    browser.sleep(500);
}

function checkTableRow1() {
    // Provera prvog reda u tabeli
    var xxx = element(by.className('table_data'));
    expect(xxx.getText()).toEqual('On Demand Titles 700+');
    browser.sleep(500);
}

function checkTableRow2() {
    // Provera drugog reda u tabeli
    var xxx = element.all(by.className('table_data')).get(1);
    expect(xxx.getText()).toEqual('Live Events 200+ Annually');
    browser.sleep(500);
}

function checkTableRow3() {
    // Provera treceg reda u tabeli
    var xxx = element.all(by.className('table_data')).get(2);
    expect(xxx.getText()).toEqual('CBANC Membership, including access to tens of thousands of discussions and thousands of downloadable documents Included');
    browser.sleep(500);
}

function checkTableRow4() {
    // Provera cetvrtog reda u tabeli
    var xxx = element.all(by.className('table_data')).get(3);
    expect(xxx.getText()).toEqual('Best For Whole Institution');
    browser.sleep(500);
}

function clickOnOnDemandTitles() {
    // Klik na On Demands Titles link u tabeli
    element(by.partialLinkText('On Demand Titles')).click();
    browser.sleep(1000)
}

function checkOnDemandTitlesURL() {
    // Provera da li se ucitala On Demands strana
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://qa.cbancnetwork.com/education/webinars/on_demand"), 3000);
}

function clickOnOnLiveEvents() {
    // Klik na On Live Events link u tabeli
    element(by.partialLinkText('Live Events')).click();
    browser.sleep(1000)
}

function checkOnLiveEventsURL() {
    // Provera da li se ucitala Upcoming Webinars strana
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://qa.cbancnetwork.com/education/webinars/calendar"), 3000);
}

function checkAssetSizeTable() {
    // Provera sadrzaja Asset size tabele
    var xxx = element(by.className('asset_sizes_table'));
    expect(xxx.getText()).toEqual('All Access Plus\nFI Asset Size All Inclusive\n0-500M $2,999\n501-750M $3,499\n751-1B $3,999\n1B+ $4,499');
    browser.sleep(500);
}

function checkBottomText() {
    // Provera texta na dnu stranice
    var xxx = element.all(by.className('topics separator')).get(2).element(by.tagName('h3'));
    expect(xxx.getText()).toEqual('Don’t miss out on valuable training for your entire staff –– Sign up for an All-Access Plus subscription today!');
    browser.sleep(500);
}

function clickOnLearnMoreButton() {
    // Klik na LEARN MORE button
    element(by.className('button hero_cta')).click();
    browser.sleep(500);
}

function checkLabelForFirstNameField() {
    // Provera First Name labele iznad polja 
    var xxx = element(by.className('field text_field'));
    expect(xxx.getText()).toEqual("First Name");
}

function checkLabelForLastNameField() {
    // Provera Last Name labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(1);
    expect(xxx.getText()).toEqual("Last Name");
}

function checkLabelForEmailField() {
    // Provera Email labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(2);
    expect(xxx.getText()).toEqual("Email");
}

function checkLabelForFinancialField() {
    // Provera Financial Institution labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(3);
    expect(xxx.getText()).toEqual("Financial Institution");
}

function checkLabelForAssetField() {
    // Provera Asset Size labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(4);
    expect(xxx.getText()).toEqual("Asset Size");
}

function checkLabelForPhoneField() {
    // Provera Phone Number labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(5);
    expect(xxx.getText()).toEqual("Phone Number");
}

function enterFirstName(){
    //  Unosenje texta u first name field
    element(by.id('first_name')).clear().sendKeys('QA');
}
 
function enterLastName(){
    //  Unosenje texta u last name field
    element(by.id('last_name')).clear().sendKeys('Testing');
}
 
function enterEmail(){
     //  Unosenje texta u email field
     element(by.id('email')).clear().sendKeys('qa@testing.com');
}

function enterFinancial(){
    //  Unosenje texta u financial institution field
    element(by.id('fi_name')).clear().sendKeys('Austin Bank');
}

function enterAsset(){
    //  Unosenje texta u asset size field
    element(by.id('asset_size')).clear().sendKeys('500M');
}

function enterPhone(){
    //  Unosenje broja u phone field
    element(by.id('phone_number')).clear().sendKeys('5125834570');
    browser.sleep(1000);
}

function clickOnSubmitButton(){
    //  Klik na Submit button
    element(by.className('cta')).click();
    browser.sleep(2000);
}

function checkSuccessURLOnProduction() {
    // Provera da li se ucitao Success url u produkciji
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://www.cbancnetwork.com/cbanc-education?success=true"), 3000);
}

function checkSuccessMessage() {
    // Provera success poruke
    var xxx = element(by.id('lead_success'));
    expect(xxx.getText()).toEqual("×\nThank You!\nWe received your info and we'll be in touch soon.");
}

function landOnQaSuccessPage() {
    // Dolazak na QA success stranu 
    browser.get('https://qa.cbancnetwork.com/cbanc-education?success=true'); 
    browser.sleep(3000);
}

function checkIsFristNameInTheField() {
    // Provera da li se u First name polju nalazi ime od logovanog usera
    var inputValue = element(by.id('first_name'));
    expect(inputValue.getAttribute('value')).toEqual('Chicago Alberto');
}

function checkIsLastNameInTheField() {
    // Provera da li se u Last name polju nalazi ime od logovanog usera
    var inputValue = element(by.id('last_name'));
    expect(inputValue.getAttribute('value')).toEqual('Diaz FI');
}

function checkIsEmailInTheField() {
    // Provera da li se u Email polju nalazi email od logovanog usera
    var inputValue = element(by.id('email'));
    expect(inputValue.getAttribute('value')).toEqual('1@chicago.com');
}

function checkIsFiInTheField() {
    // Provera da li se u Financial Institution polju nalazi naziv banke od logovanog usera
    var inputValue = element(by.id('fi_name'));
    expect(inputValue.getAttribute('value')).toEqual('Bank of Chicago');
}
 
module.exports = {
    landOnEducation,
    openIntercom,
    closeIntercom,
    checkPageTitle,
    checkTextBelowTitle,
    checkListedText,
    clickOnVTCButton,
    checkCalendarURL,
    checkFandFTitle,
    checkCalendarImage,
    checkCalendarText,
    checkLightballImage,
    checkLightballText,
    checkAnaliticImage,
    checkAnaliticText,
    checkTargetImage,
    checkTargetText,
    checkTopicAreasText,
    checkLeftList,
    checkRightList,
    checkHowToJoinText,
    checkPurchaseText,
    checkTableTitle,
    checkTableRow1,
    checkTableRow2,
    checkTableRow3,
    checkTableRow4,
    clickOnOnDemandTitles,
    checkOnDemandTitlesURL,
    clickOnOnLiveEvents,
    checkOnLiveEventsURL,
    checkAssetSizeTable,
    checkBottomText,
    clickOnLearnMoreButton,
    checkLabelForFirstNameField,
    checkLabelForLastNameField,
    checkLabelForEmailField,
    checkLabelForFinancialField,
    checkLabelForAssetField,
    checkLabelForPhoneField,
    enterFirstName,
    enterLastName,
    enterEmail,
    enterFinancial,
    enterAsset,
    enterPhone,
    clickOnSubmitButton,
    checkSuccessURLOnProduction,
    checkSuccessMessage,
    landOnQaSuccessPage,
    checkIsFristNameInTheField,
    checkIsLastNameInTheField,
    checkIsEmailInTheField,
    checkIsFiInTheField,

}