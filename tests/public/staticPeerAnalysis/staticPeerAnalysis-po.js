function clickOnLink() {
    //  Klik na PA link iz drop menu
    element(by.className('peer_group_analysis')).click();
 }

 function checkPaUrl() {
    // Provera PA URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer-group-analysis'), 7000);
}

function checkRAPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC Peer Group Analysis Tool'), 7000);
}

function checkFirstSectionOnPage() {
    // Provera title, description i LAUNCH PEER ANALYSIS TOOL buttna na strani
    var xxx = element(by.className('content'));
    expect(xxx.getText()).toEqual("Streamlined peer analysis, for free!\nOur simplified tool makes analyzing UBPR data easy…so you can focus on the numbers.\nLAUNCH PEER ANALYSIS TOOL");
}

function CheckCreateCustomReportsInSeconds(){
      // Provera Create custom reports in seconds sekcije na strani 
      var xxx = element(by.id('text-box-one'));
      expect(xxx.getText()).toEqual("Create custom reports in seconds.\nTired of manually entering UBPR data into Excel? Quickly pull down the data you need by selecting only the measure categories that matter to you. Adjust your reporting period as needed—current and historical data are available.");  
}

function CheckCreateCustomReportsInSecondsImage() {
    // Provera da li se ucitala slika u Create custom reports in seconds sekciji
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/peer-group-analysis/reports.png');
}

function CheckChooseYourOwnPeerGroups(){
    // Provera Choose your own peer groups sekcije na strani 
    var xxx = element(by.id('text-box-two'));
    expect(xxx.getText()).toEqual("Choose your own peer groups.\nTailor your peer groups as you see fit. Simply search by bank name and select as many banks as you want.");  
}

function CheckChooseYourOwnPeerGroupsImage() {
  // Provera da li se ucitala slika u Choose your own peer groups sekciji
  var xxx = element.all(by.tagName('img')).get(2);
  expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/peer-group-analysis/peer_groups.png');
}

function CheckViewDataTrendsOverTimeGroups(){
    // Provera View data trends over time sekcije na strani 
    var xxx = element(by.id('text-box-three'));
    expect(xxx.getText()).toEqual("View data trends over time.\nSee data trends over multiple time periods in simple, easy-to-read graph format.");  
}

function CheckViewDataTrendsOverTimeGroupsImage() {
  // Provera da li se ucitala slika u View data trends over time sekciji
  var xxx = element.all(by.tagName('img')).get(3);
  expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/peer-group-analysis/peer_analysis.jpg');
}


function CheckDownloadAndShareWithYourTeam(){
    // Provera Download and share with your team sekcije na strani 
    var xxx = element(by.id('text-box-four'));
    expect(xxx.getText()).toEqual("Download and share with your team.\nOnce you finish your selections, you can download your report to a .csv with one click.");  
}

function CheckDownloadAndShareWithYourTeamImage() {
  // Provera da li se ucitala slika u Download and share with your team sekciji
  var xxx = element.all(by.tagName('img')).get(4);
  expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/peer-group-analysis/custom_reports.png');
}

function CheckBottomSection(){
    // Provera sekcije iznad premium reklame
    var xxx = element(by.className('row_bottom'));
    expect(xxx.getText()).toEqual("See how you stack up against the banking competition... and save time (and money!) doing it.\nGET STARTED");  
}

function CheckPremiumAd(){
    // Provera sekcije Premium reklama
    var xxx = element(by.className('premium_ad'));
    expect(xxx.getText()).toEqual("Unlock all of CBANC Premium to save even more!\nLoop in your executives to learn how you can save even more on your training costs by bundling with other solutions for your FI.\nCBANC Premium is a one-stop shop to streamline your operations, delight your examiners, enhance your market intelligence, and train all of your employees at a fraction of the cost that you’d typically pay other vendors. Save time and money with CBANC Premium so that you can focus on growing your institution.\nCBANC Premium with Peer Analysis includes:\nNew customizable peer groups and M&A targets, determined by your FI’s criteria\nAdd additional layers of criteria to fine tune any report including:\nLocation\nAsset size\nROA\nROE\nSave views to easily rerun reports\nIncludes the CBANC Toolbox- document management with Workspace, risk assessment catalog, and policy & procedure checklists\nLearn More About CBANC Premium");  
}

function clickOnLaunchPeerAnalysisToolButton() {
    //  Klik na LAUNCH PEER ANALYSIS TOOL button
    element(by.className('button')).click();
 }

 function checkURLAfterCLickOnTheLaunchButton() {
    // Provera peer analysis URL-a nakon logovanje
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer_analysis/'), 7000);
}

function landPublicPAPage() {
    // Dolazak na peer analysis public stranu 
    browser.get('https://qa.cbancnetwork.com/peer-group-analysis'); 
}
function clickOnGetStartedButton() {
    //  Klik na GET STARTED button
    element.all(by.className('button')).get(1).click();
 }

 function clickLaunchButtonForAd() {
    //  Klik na Learn More About CBANC Premium button
    element.all(by.className('button')).get(2).click();
 }

 function checkURLAfterCLickOnTheLaunchButtonForAd() {
    // Provera Premium URL-a nakon logovanja
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/premium?icn=peer-group-analysis'), 7000);
}

module.exports = {
    clickOnLink,
    checkPaUrl,
    checkRAPageTitle,
    checkFirstSectionOnPage,
    CheckCreateCustomReportsInSeconds,
    CheckCreateCustomReportsInSecondsImage,
    CheckChooseYourOwnPeerGroups,
    CheckChooseYourOwnPeerGroupsImage,
    CheckViewDataTrendsOverTimeGroups,
    CheckViewDataTrendsOverTimeGroupsImage,
    CheckDownloadAndShareWithYourTeam,
    CheckDownloadAndShareWithYourTeamImage,
    CheckBottomSection,
    CheckPremiumAd,
    clickOnLaunchPeerAnalysisToolButton,
    checkURLAfterCLickOnTheLaunchButton,
    landPublicPAPage,
    clickOnGetStartedButton,
    clickLaunchButtonForAd,
    checkURLAfterCLickOnTheLaunchButtonForAd,
}