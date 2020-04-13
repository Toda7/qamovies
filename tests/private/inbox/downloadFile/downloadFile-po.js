// function landOnHomePage() {
//     // dolazak na Home page
//     browser.get('https://qa.cbancnetwork.com'); 
//     browser.sleep(2000);
// }
// function clickOnSignIn() {
//     // klik na Sign In
//     element(by.className('sign_in')).click();
//     rowser.sleep(1000);
// }

function enterEmail() {
    // Unesi Email Adresu
    element(by.name('email')).sendKeys('1@detroit.com');
}

function enterPass() {
    // Unesi Email Password
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    // Submit credentials
    element(by.className('auth0-label-submit')).click();
    browser.sleep(4000);
}

// function landOnFIProfessionalsHome() {
//     // dolazak na FI Professionals page
//     browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
//     browser.sleep(2000);
// }

// function clickUserMenu() {
//     // Klik na User menu
//     element(by.className('nav_user_auth')).click(); 
//     browser.sleep(1000);
// }

// function clickInbox() {
//     //  Klikni na Inbox link
//     element(by.className('collection-item inbox_link')).click();
//     browser.sleep(1000);
// }

function clickContact() {
    //  Klik na Kontakt iz liste
    element(by.className('title truncate', 'Chicago Alberto1 Diaz FI1')).click();
    browser.sleep(2000);
}

function clickDoc() {
    //  Klik na Doc
    element(by.className('document', 'TestTXT.txt')).click();
    browser.sleep(2000);
}

function clickToGoBack() {
    //  Klik na Doc
    element(by.className('material-icons left')).click();
    browser.sleep(2000);
}

function clickAvatar() {
    //  Klik na User Menu
    element(by.className('avatar')).click();
    browser.sleep(2000);
}

function signOut() {
    //  Klik na Sign Out
    element(by.className('collection-item red-text')).click();
    browser.sleep(2000);
}


// function checkSuccess(){
//     var EC = protractor.ExpectedConditions;
//     // Provera da li je uspesno obrisana diskusija
//     browser.wait(EC.textToBePresentInElement($('.card-content'), 'Excellent work. You are all caught up!'), 7000);
//     browser.sleep(2000);
//  }  

function enterEmail1() {
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPass1() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit1() {
    element(by.className('auth0-label-submit')).click();
    browser.sleep(5000);
}
function refreshPage() {
    //  Refreshuj stranu
    browser.refresh(); 
    browser.sleep(2000);
 }


 module.exports = {
    // landOnHomePage,
    // clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
    // landOnFIProfessionalsHome,
    // clickUserMenu,
    // clickInbox,
    clickContact,
    clickDoc,
    clickToGoBack,
    // checkSuccess,
    clickAvatar,
    signOut,
    enterEmail1,
    enterPass1,
    submit1,
    refreshPage,
}