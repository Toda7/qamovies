function landOnRiskAssessment() {
    // Dolazak na Risk Assessment stranu
    browser.get('https://qa.cbancnetwork.com/risk_assessment');
}

function checkHeroText() {
    // Provera da li se ucitao text u Hero sekciji
    var xxx = element(by.className('hero'));
    expect(xxx.getText()).toEqual("Risk Assessments for Financial Institutions\nAssessing risk doesn't have to be rocket science.\nTRY IT FOR FREE");
}

function clickTryItForFreeButton() {
    // Klik na TRY IT FOR FREE dugme
    element(by.className('hero')).element(by.tagName('a')).click();
}

function checkRiskAssessmentToolboxURL() {
    // Provera da li se ucitao URL za Risk Assessment Toolbox stranu
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/risk_assessment/toolbox'), 5000);
}

function checkRiskAssessmentToolboxText() {
    // Provera da li se ucitao text za Risk Assessment Toolbox stranu
    var xxx = element(by.className('content anonimous'));
    expect(xxx.getText()).toEqual('Risk Assessment is available to CBANC members.\nSIGN IN');
}

function clickSignInButton() {
    // Klik na Sign In dugme
    element(by.className('content anonimous')).element(by.tagName('a')).click();
}

function checkWidgetTitle() {
    // Provera da li se ucitao widget title
    var xxx = element(by.className('auth0-lock-name'));
    expect(xxx.getText()).toEqual('CBANC Edge');
}

function checkFirstScreenshot() {
    // Provera da li se ucitao prvi screenshot 
    var xxx = element.all(by.className('plank')).get(0).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/risk_assessment/static/img/easy_to_use_interface.png');
}

function checkFirstDescriptionText() {
    // Provera da li se ucitao text u prvoj Description sekciji
    var xxx = element.all(by.className('description')).get(0);
    expect(xxx.getText()).toEqual("Simple, Easy-to-Use Interface\nWe've designed our Risk Assessment platform to simplify the process, streamline data collection, and provide thoughtful direction on next steps. Our community-powered risk assessment templates organize the best of the best CBANC Network content into a straight-forward question and answer approach to collect the core data required to inform your process.\nSEE FOR YOURSELF");
}

function clickSeeForYourselfButton() {
    // Klik na SEE FOR YOURSELF dugme
    element.all(by.className('description')).get(0).element(by.tagName('a')).click();
}

function checkSecondScreenshot() {
    // Provera da li se ucitao drugi screenshot 
    var xxx = element.all(by.className('plank')).get(1).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/risk_assessment/static/img/insight_metrics.png');
}

function checkSecondDescriptionText() {
    // Provera da li se ucitao text u drugoj Description sekciji
    var xxx = element.all(by.className('description')).get(1);
    expect(xxx.getText()).toEqual("Community Integrated Collaboration\nNo one has all the answers, that's why we've made it easy to collaborate with colleagues, pool collective knowledge across your organization, & even gain insight from thousands of other community financial professionals.\nGET STARTED");
}

function clickGetStartedButton() {
    // Klik na GET STARTED dugme
    element.all(by.className('description')).get(1).element(by.tagName('a')).click();
}

function checkThirdScreenshot() {
    // Provera da li se ucitao treci screenshot 
    var xxx = element.all(by.className('plank')).get(2).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/risk_assessment/static/img/manage_in_progress.png');
}

function checkThirdDescriptionText() {
    // Provera da li se ucitao text u trecoj Description sekciji
    var xxx = element.all(by.className('description')).get(2);
    expect(xxx.getText()).toEqual("Manage In Progress and Existing Assessments\nNeed to set down your assessment to do something else? Don't have all the info you need? You can come back anytime to complete in progress risk assessment analysis or re-visit results as information changes - keeping your efforts organized, secure, and centralized. Imagine never having to attach another spreadsheet to an email again!\nCHECK IT OUT");
}

function clickCheckItNowButton() {
    // Klik na CHECK IT OUT dugme
    element.all(by.className('description')).get(2).element(by.tagName('a')).click();
}

function checkFourthScreenshot() {
    // Provera da li se ucitao cetvrti screenshot 
    var xxx = element.all(by.className('plank')).get(3).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/risk_assessment/static/img/detailed_reporting.png');
}

function checkFourthDescriptionText() {
    // Provera da li se ucitao text u cetvrtoj Description sekciji
    var xxx = element.all(by.className('description')).get(3);
    expect(xxx.getText()).toEqual("Detailed Reporting for Compliance Support\nExport your hard work in a handsome format that will expedite the compliance review process and make you the rockstar at the next board meeting.\nDEMO ASSESSMENT ENGINE");
}

function clickDemoAssessmentEngineButton() {
    // Klik na DEMO ASSESSMENT ENGINE dugme
    element.all(by.className('description')).get(3).element(by.tagName('a')).click();
}



function checkFifthScreenshot() {
    // Provera da li se ucitao peti screenshot 
    var xxx = element.all(by.className('plank')).get(4).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/risk_assessment/static/img/integrated_vendor_management.png');
}

function checkFifthDescriptionText() {
    // Provera da li se ucitao text u petoj Description sekciji
    var xxx = element.all(by.className('description')).get(4);
    expect(xxx.getText()).toEqual("Combine with Vendor Management for a Comprehensive Compliance Solution\nOur risk assessment engine is more than just another analysis module, it's a customizable platform which fully integrates to our vendor management solution. This means you have a one stop shop aggregating all of your compliance efforts in a single suite across your entire organization.\nTRY A RISK ASSESSMENT");
}

function clickTryRiskaAssessmentButton() {
    // Klik na TRY A RISK ASSESSMENT dugme
    element.all(by.className('description')).get(4).element(by.tagName('a')).click();
}

function checkFooterText() {
    // Provera da li se ucitao text u futeru
    var xxx = element(by.className('content_footer'));
    expect(xxx.getText()).toEqual("Want some more information before trying it out?\nOur member experience team is waiting to hear from you! Please contact us at help@cbancnetwork.com");
}

module.exports = {
    landOnRiskAssessment,
    checkHeroText,
    clickTryItForFreeButton,
    checkRiskAssessmentToolboxURL,
    checkRiskAssessmentToolboxText,
    clickSignInButton,
    checkWidgetTitle,
    checkFirstScreenshot,
    checkFirstDescriptionText,
    clickSeeForYourselfButton,
    checkSecondScreenshot,
    checkSecondDescriptionText,
    clickGetStartedButton,
    checkThirdScreenshot,
    checkThirdDescriptionText,
    clickCheckItNowButton,
    checkFourthScreenshot,
    checkFourthDescriptionText,
    clickDemoAssessmentEngineButton,
    checkFifthScreenshot,
    checkFifthDescriptionText,
    clickTryRiskaAssessmentButton,
    checkFooterText,
}