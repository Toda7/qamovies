var checkOptInMsgAfterDownloadDoc = require('./checkOptInMsgAfterDownloadDoc-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var searchOnDocLibPage = require('../searchOnDocLibPage/searchOnDocLibPage-po.js');

describe('Provera opt in poruke za FI usera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents Library page', function(){
        docLibraryCheck.landOnDocsLibraryPage();
        browser.sleep(3000);
    });

    it('Unosenje texta u search polje', function(){
        checkOptInMsgAfterDownloadDoc.enterDocName();
        browser.sleep(2000);
    });

    it('Klik na document iz rezultata', function(){
        searchOnDocLibPage.clickOnDocToSeeDocDetailsPage();
        browser.sleep(1000);
    });

    it('Klik na Download button', function(){
        checkOptInMsgAfterDownloadDoc.clickOnDownloadDiscussion();
        browser.sleep(2000);
    });
    
    it('Provera da li se ucitao naslov u poruci', function(){
        checkOptInMsgAfterDownloadDoc.checkTitleInMessage();
    });

    it('Provera da li se ucitalo pitanje u poruci', function(){
        checkOptInMsgAfterDownloadDoc.checkQuestionInMessage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala Thank recenica u poruci', function(){
        checkOptInMsgAfterDownloadDoc.checkThankSectionInMessage();
        browser.sleep(1000);
    });


    


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
