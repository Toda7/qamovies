var checkPollOnDocumentLibPage = require('./checkPollOnDocumentLibPage-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');


describe('Provera polla na document library page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Documents Library page', function () {
        docLibraryCheck.landOnDocsLibraryPage();
    });

    it('Provera da li se poll header ucitao', function () {
        checkPollOnDocumentLibPage.checkPollHeader();
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.sleep(5000);
    });

    it('Provera da li se poll title ucitao', function () {
        checkPollOnDocumentLibPage.checkPollTitle();
    });

    it('Provera da li se ucitalo prvo pitanje', function () {
        checkPollOnDocumentLibPage.checkFirstQuestion();
    });

    it('Provera da li se prvi radio button u prvom pitanju', function () {
        checkPollOnDocumentLibPage.checkFirstRadioButton();
    });

    it('Provera da li se ucitalo trece pitanje', function () {
        checkPollOnDocumentLibPage.checkThirdQuestion();
    });

    it('Provera da li se ucitalo sesti radio button u trecem pitanju', function () {
        checkPollOnDocumentLibPage.checkRadioButtonInThirdQuestion();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
