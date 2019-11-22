var downloadFile = require('./downloadFile-po.js');

describe('Download fajla u Inboxu', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    // it('Dolazak na Home Page', function(){
    //     downloadFile.landOnHomePage();
    // });

    // it('Klik na Sign In', function(){
    //     downloadFile.clickOnSignIn();
    // });

    it('Unesi Email Adresu', function(){
        downloadFile.enterEmail();
    });

    it('Unesi Email Password', function(){
        downloadFile.enterPass();
    });

    it('Submit Credentials', function(){
        downloadFile.submit();
    });

    // it('Dolazak na FI Professionals', function(){
    //     downloadFile.landOnFIProfessionalsHome();
    // });

    // it('Klik na User Menu', function(){
    //     downloadFile.clickUserMenu();
    // });

    // it('Klik na Inbox link', function(){
    //     downloadFile.clickInbox();
    //     browser.getAllWindowHandles().then(function (handles) {
    //     browser.switchTo().window(handles[1]);
    // });
    // });

    it('Klik na kontakt', function(){
        downloadFile.clickContact();
    });

    it('Klik na document i zatvaranje taba', function(){
        downloadFile.clickDoc();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
