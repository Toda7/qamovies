function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnUserMenu() {
    //  Klik na Usr meni
    element(by.className('user_name')).click();
 
} 
function clickOnSignOut() {
    //  Klik na Sign Out
    element(by.className('sign_out')).click();
 } 


function clickOnSignIn() {
   element(by.className('sign_in')).click();
}

function checkSignInUrl() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://cbancnetwork-edge.auth0.com/login'), 7000);
}

function enterEmail() {
    element(by.name('email')).sendKeys('vpp+vca@coffeedream.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    element(by.className('auth0-label-submit')).click();
}

function checkLogInUrl() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/dashboard/'), 7000);
}

function clickOnComunity() {
    // Klik na Comunity link na dashboardu
    element(by.className('home')).click();
    browser.sleep(2000);
}
 
function checkComunityUrl() {
     // Provera Url Comunity 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/home'), 7000);
}

function clickOnEducation() {
    // klik na search dugme
    element(by.className('education')).click();
    browser.sleep(2000);
}

// function checkSearchField()  {
//     // Proverava da li se ucitalo "Search Upcoming Webinars"
//     var EC = protractor.ExpectedConditions;
//     browser.wait(EC.textToBePresentInElement($('.search_form'),'Search Upcoming Webinars'), 7000);
// }

function checkWebinarIsPresent(){
    // Provera da li se webinar ucitao
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf($('.webinar_item')), 7000);
    }

 function checkEducationUrl() {
     // Provera Url Education 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/webinars/calendar'), 7000);
}

function clickOnViewFinder() {
    // Klik na ViewFinder link na dashboardu
    element(by.className('viewfinder')).click();
    browser.sleep(2000);
}
 
function checkViewFinderUrl() {
     // Provera View Finder Url 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/view_finder/dashboard/8287c4c0-d86a-47b1-9bf9-ee925b78c59b/institutions'), 7000);
}

function clickOnWorkspace() {
    // Klik na ViewFinder link na dashboardu
    element(by.className('workspace_lock')).click();
    browser.sleep(2000);
}
 
function checkWorkspaceUrl() {
     // Provera View Finder Url 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/premium'), 7000);
}

function clickOnUserMenu() {
    //  Klik na Usr meni
    element(by.className('user_name')).click();
 
} 
function clickOnSignOut() {
    //  Klik na Sign Out
    element(by.className('sign_out')).click();
 } 


function clickOnSignInV() {
   element(by.className('sign_in')).click();
}

function checkSignInUrlV() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://cbancnetwork-edge.auth0.com/login'), 7000);
}

function enterEmailV() {
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPassV() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submitV() {
    element(by.className('auth0-label-submit')).click();
}

function checkLogInUrlV() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/dashboard/'), 7000);
}


module.exports = {
    landOnHomePage,
    clickOnUserMenu,
    clickOnSignOut,
    clickOnSignIn,
    checkSignInUrl,
    enterEmail,
    enterPass,
    submit, 
    checkLogInUrl,
    clickOnComunity,
    checkComunityUrl,
    clickOnEducation,
    //checkSearchField,
    checkWebinarIsPresent,
    checkEducationUrl,
    clickOnViewFinder,
    checkViewFinderUrl,
    clickOnWorkspace,
    checkWorkspaceUrl,
    enterEmailV,
    enterPassV,
    submitV,
    checkLogInUrlV,
    checkSignInUrlV,
    clickOnSignInV,


}