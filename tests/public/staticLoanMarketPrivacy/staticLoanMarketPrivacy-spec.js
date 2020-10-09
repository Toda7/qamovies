var staticLoanMarketPrivacy = require('./staticLoanMarketPrivacy-po.js');

describe('Provera Market Place Privacy strane', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Market Place Privacy stranu', function () {
        staticLoanMarketPrivacy.landOnMarketPlacePrivacy();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Prvi deo', function () {
        staticLoanMarketPrivacy.checkTextOne();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Drugi deo', function () {
        staticLoanMarketPrivacy.checkTextTwo();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Treci deo', function () {
        staticLoanMarketPrivacy.checkTextTwo();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Cetvrti deo', function () {
        staticLoanMarketPrivacy.checkTextFour();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Peti deo', function () {
        staticLoanMarketPrivacy.checkTextFive();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Sesti deo', function () {
        staticLoanMarketPrivacy.checkTextSix();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Sedmi deo', function () {
        staticLoanMarketPrivacy.checkTextSeven();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Osmi deo', function () {
        staticLoanMarketPrivacy.checkTextEight();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Deveti deo', function () {
        staticLoanMarketPrivacy.checkTextNine();
        browser.sleep(7000);
    });

    it('Provera texta na strani - Deseti deo', function () {
        staticLoanMarketPrivacy.checkTextTen();
        browser.sleep(7000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});