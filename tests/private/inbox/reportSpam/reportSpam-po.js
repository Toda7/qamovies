function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
    browser.sleep(2000);
}

function clickUserMenu() {
    // Klik na User menu
    element(by.className('nav_user_auth')).click(); 
    browser.sleep(1000);
}

function clickInbox() {
    //  Klikni na Inbox link
    element(by.className('collection-item inbox_link')).click();
    browser.sleep(1000);
}

function clickContact() {
    //  Klik na Kontakt iz liste
    element(by.className('title truncate', '1st Detroit FI')).click();
    browser.sleep(2000);
}

function clickAction() {
    //  Klik na Action menu
    element(by.className('dropdown_button grey-text')).click();
    browser.sleep(2000);
}

function clickReport() {
    //  Klik na Report Spam dugme
    element(by.className('collection-item grey-text')).click();
    browser.sleep(2000);
}

function clickBack() {
    //  Klik na Back dugme
    element(by.className('left', 'arrow_back')).click();
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
 module.exports = {
    landOnFIProfessionalsHome,
    clickUserMenu,
    clickInbox,
    clickContact,
    clickAction,
    clickReport,
    clickBack,
    clickAvatar,
    signOut,
    // checkSuccess,
}