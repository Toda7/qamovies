var anonymousDocumentDetailsPage = require('./anonymousDocumentDetailsPage-po.js');
var documentDetailsPage = require('../documentDetailsPage/documentDetailsPage-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var searchOnDocLibPage = require('../searchOnDocLibPage/searchOnDocLibPage-po.js');

describe('Anonymous Document details page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents Library page', function(){
        docLibraryCheck.landOnDocsLibraryPage();
        browser.sleep(3000);
    });

    it('Dolazak na Documents Library page', function(){
        anonymousDocumentDetailsPage.enterSearchWord();
    });

    it('Klik na document iz rezultata', function(){
        searchOnDocLibPage.clickOnDocToSeeDocDetailsPage();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao breadcrumbs', function(){
        anonymousDocumentDetailsPage.checkBreadcrumbs();
    });

    it('Provera da li se ucitao doc icon(pdf)', function(){
        documentDetailsPage.checkDocIcon();
    });

    it('Provera da li se ucitao doc title', function(){
        anonymousDocumentDetailsPage.checkDocTitle();
    });

    it('Provera da li su se ucitali topici u kartici', function(){
        anonymousDocumentDetailsPage.checkTopics();
    });

    it('Provera da li je dobar default user avatar na document details page', function(){
        anonymousDocumentDetailsPage.checkDefaultUserAvatar();
    });


    it('Provera da li se ucitao user name', function(){
        anonymousDocumentDetailsPage.checkAnonymousUserName();
    });

    it('Provera da li se ucitao org', function(){
        anonymousDocumentDetailsPage.checkOrg();
    });

    it('Provera da li se ucitao org size', function(){
        anonymousDocumentDetailsPage.checkOrgSize();
    });

    it('Provera da li se ucitala discussion gde smo objavili document', function(){
        anonymousDocumentDetailsPage.checkDiscussionLinkWhereDocIsPosted();
    });

    it('Provera da li se ucitao Download button', function(){
        documentDetailsPage.checkDownloadButton();
    });

    it('Provera da li se ucitao Thanks button', function(){
        documentDetailsPage.checkThanksButton();
    });

    it('Provera da li se ucitao Share button', function(){
        documentDetailsPage.checkShareButton();
    });

    it('Provera da li se START DISCUSSION button ucitao na strani', function(){
        docLibraryCheck.checkStartDiscussionButton();
    });

    it('Provera da li se poll header ucitao', function(){
        docLibraryCheck.checkPollHeader();
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    });

    it('Provera da li se poll title ucitao', function(){
        docLibraryCheck.checkPollTitle();
    });

    it('Provera da li se ucitalo prvo pitanje', function(){
        docLibraryCheck.checkFirstQuestion();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
