var shareDocument = require('./shareDocument-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var searchOnDocLibPage = require('../searchOnDocLibPage/searchOnDocLibPage-po.js');
var documentDetailsPage = require('../documentDetailsPage/documentDetailsPage-po.js');

describe('Share document form', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents details page', function(){
        documentDetailsPage.landOnDocDetailsPage();
        browser.sleep(2000);
    });

    it('Klik on Share button', function(){
        shareDocument.clickOnShareButton();
        browser.sleep(2000);
    });

    it('Provera da li se Share title ucitao u formi', function(){
        shareDocument.checkTitleInShareForm();
    });

    it('Unosenje invalid email adrese', function(){
        shareDocument.enterInvalidEmailAddress();
        browser.sleep(1000);
    });

    it('Klik na Send dugme', function(){
        shareDocument.clickOnSendButton();
        browser.sleep(5000);
    });

    it('Provera snackbar poruke za invalid email', function(){
        shareDocument.checkInvalidEmailAddress();
        browser.sleep(3000);
    });

    it('Brisanje invalid emaila iz polja', function(){
        shareDocument.clearTheField();
        browser.sleep(1000);
    });

    it('Unosenje email adrese', function(){
        shareDocument.enterEmailAddress();
        browser.sleep(1000);
    });

    it('Unosenje druge email adrese', function(){
        shareDocument.enter2EmailAddress();
        browser.sleep(1000);
    });

    it('Klik on + Add another email link', function(){
        shareDocument.clickOnAddAnotherLink();
        browser.sleep(2000);
    });

    it('Unosenje trece email adrese', function(){
        shareDocument.enter3EmailAddress();
        browser.sleep(1000);
    });
    
    it('Klik na Send dugme', function(){
        shareDocument.clickOnSendButton();
    });

    it('Provera da li je uspesno sharovan document', function(){
        shareDocument.checkSuccess();
        browser.sleep(3000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
