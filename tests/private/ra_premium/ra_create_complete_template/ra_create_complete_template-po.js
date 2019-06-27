function clickStartNewLink() {
    // Klik na Start new button
    element(by.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/a')).click();
    browser.sleep(2000);
 }
 function checkTitleOfTemplate(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title of template
    browser.wait(EC.textToBePresentInElement($('.card-content.top_content'), 'START UP TEMPLATE Risk Assessment'), 5000);
}   
function checkFirstTitleOfQuestion(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao first title of question
    browser.wait(EC.textToBePresentInElement($('#factor_0'), 'Test Factor'), 5000);
}   
function clickOnOption() {
    // In first question click on option
    element(by.xpath('//*[@id="factor_0"]/form/div/div[1]/div[1]/p[1]/label')).click(); 
    browser.sleep(2000);
 }
 function checkSecondTitleOfQuestion(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao second title of question
    browser.wait(EC.textToBePresentInElement($('.collection-item.controls'), 'Controls'), 5000);
}   
function clickOnSecondOption() {
    // In second question click on option
    element(by.xpath('//*[@id="factor_0"]/form/div/div[2]/div[1]/p[1]/label')).click(); 
    browser.sleep(2000);
 }
 function checkThirdTitleOfQuestion(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao third title of question
    browser.wait(EC.textToBePresentInElement($('.collection-item.residual_risk'), 'Residual Risk & Mitigation Steps'), 5000);
}   
function clickOnThirdOption() {
    // In third question click on option
    element(by.xpath('//*[@id="factor_0"]/form/div/div[3]/div[1]/p[3]/label')).click(); 
    browser.sleep(2000);
 }
 function checkProgress(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je progress 100%
    browser.wait(EC.textToBePresentInElement($('.progress_text'), '100%'), 5000);
}   
function clickOnGenerateReport() {
    //  Klik na Generate Report button
    element(by.className('view_report')).click();
    browser.sleep(2000);
 }
 function checkReportPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC Premium - Risk Assessment'), 5000);
}
function checkTitleReportInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title report in header
    browser.wait(EC.textToBePresentInElement($('.page-title.truncate'), 'START UP TEMPLATE Report'), 5000);
} 
function checkPrintInHeader(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitala print icon in header
    browser.wait(EC.textToBePresentInElement($('.right'), 'local_printshop'), 5000);
} 
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page 
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'START UP TEMPLATE'), 5000);
} 
function checkSummary(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao summary ispod title on page 
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Your overall fair lending residual risk is '), 5000);
} 
function checkRatingSummary() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao rating summery -> Considerable' 
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Considerable.'), 5000);
} 
function checkSecondTitleOnPage() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao drugi title on page
    browser.wait(EC.textToBePresentInElement($('.card'), 'Risk Component Snapshot'), 5000);
} 
function checkRiskComponent() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Risk Component
    browser.wait(EC.textToBePresentInElement($('.card'), 'Test component'), 5000);
} 
function checkAverageResidual() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Average Residual Risk Rating
    browser.wait(EC.textToBePresentInElement($('.card'), '3.0'), 5000);
} 
function checkRiskLevel() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Risk Level
    browser.wait(EC.textToBePresentInElement($('.card'), 'Considerable'), 5000);
} 
function checkThirdTitleOnPage() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao drugi title on page
    browser.wait(EC.textToBePresentInElement($('.card'), 'Risk Component Breakdown'), 5000);
} 
function checkTestComponentOnPage() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Test component on page
    browser.wait(EC.textToBePresentInElement($('.card'), 'Test component'), 5000);
}
function checkMyFirstAnswer() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao my first answer
    browser.wait(EC.textToBePresentInElement($('.card'), 'Answer on first question'), 5000);
}
function checkMySecondAnswer() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao my second answer
    browser.wait(EC.textToBePresentInElement($('.card'), 'Answer on second question'), 5000);
}
function checkMyThirdAnswer() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao my third answer
    browser.wait(EC.textToBePresentInElement($('.card'), 'Answer on third question'), 5000);
}
function clickBackIcon() {
    //  Klik na back icon
    element(by.className('left')).click();
    browser.sleep(2000);
 }
 function checkCompletedURL() {
    // Provera da li se ucitao complete url'
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/ra/b0fcf98f-a435-4c19-bae0-bb9b15bb94b4/completed'), 5000);
    browser.sleep(2000);
}
function checkCompletedTemplate() {
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio novi completed template
    browser.wait(EC.textToBePresentInElement($('.completed'), 'START UP TEMPLATE'), 5000);
}

module.exports = {
    clickStartNewLink,
    checkTitleOfTemplate,
    checkFirstTitleOfQuestion,
    clickOnOption,
    checkSecondTitleOfQuestion,
    clickOnSecondOption,
    checkThirdTitleOfQuestion,
    clickOnSecondOption,
    clickOnThirdOption,
    checkProgress,
    clickOnGenerateReport,
    checkReportPageTitle,
    checkTitleReportInHeader,
    checkPrintInHeader,
    checkTitleOnPage,
    checkSummary,
    checkRatingSummary,
    checkSecondTitleOnPage,
    checkRiskComponent,
    checkAverageResidual,
    checkRiskLevel,
    checkThirdTitleOnPage,
    checkTestComponentOnPage,
    checkMyFirstAnswer,
    checkMySecondAnswer,
    checkMyThirdAnswer,
    clickBackIcon,
    checkCompletedURL,
    checkCompletedTemplate,
}