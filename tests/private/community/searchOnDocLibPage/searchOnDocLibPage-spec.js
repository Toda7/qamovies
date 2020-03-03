var searchOnDocLibPage = require('./searchOnDocLibPage-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Search na document library page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents Library page', function(){
        docLibraryCheck.landOnDocsLibraryPage();
        browser.sleep(3000);
    });

    it('Unosenje texta u search polje da dobijemo no document poruku', function(){
        searchOnDocLibPage.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera da li se poruka za no documents ucitala', function(){
        searchOnDocLibPage.checkNoDocMessage();
        browser.sleep(1000);
    });

    it('Provera da li smo dobili search URL', function(){
        searchOnDocLibPage.checkURLwithSearchWord();
    });

    it('Brisanje texta iz search polja', function(){
        searchOnDocLibPage.removeTextFromTheField();
        browser.sleep(2000);
    });

    it('Unosenje texta u search polje', function(){
        searchOnDocLibPage.enterValidSearchWord();
        browser.sleep(2000);
    });

    it('Provera da li se na strani nalazi 1 document', function(){
        searchOnDocLibPage.countOneDoc();
    });

    it('Provera da li se ucitao doc name u kartici', function(){
        searchOnDocLibPage.checkDocName();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao user name u kartici', function(){
        searchOnDocLibPage.checkUserName();
    });

    it('Provera da li su se ucitali topici u kartici', function(){
        searchOnDocLibPage.checkTopic();
    });

    it('Provera da li se ucitao VIEW DOCUMENT button', function(){
        searchOnDocLibPage.checkViewDocumentButton();
    });

    it('Klik na document iz rezultata', function(){
        searchOnDocLibPage.clickOnDocToSeeDocDetailsPage();
        browser.sleep(1000);
    });

    it('Provera URLa nakon klika na doc iz rezultata', function(){
        searchOnDocLibPage.checkDocumentDetailsURL();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
