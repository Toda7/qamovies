var staticLoanMarketTerms = require('./staticLoanMarketTerms-po.js');

describe('Provera Market Place Terms strane', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Market Place Terms stranu', function () {
        staticLoanMarketTerms.landOnMarketPlaceTerms();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Prvi deo', function () {
        staticLoanMarketTerms.checkTextOne();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Drugi deo', function () {
        staticLoanMarketTerms.checkTextTwo();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Treci deo', function () {
        staticLoanMarketTerms.checkTextThree();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Cetvrti deo', function () {
        staticLoanMarketTerms.checkTextFour();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Peti deo', function () {
        staticLoanMarketTerms.checkTextFive();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Sesti deo', function () {
        staticLoanMarketTerms.checkTextSix();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Sedmi deo', function () {
        staticLoanMarketTerms.checkTextSeven();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Osmi deo', function () {
        staticLoanMarketTerms.checkTextEight();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Deveti deo', function () {
        staticLoanMarketTerms.checkTextNine();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Deseti deo', function () {
        staticLoanMarketTerms.checkTextTen();
        browser.sleep(4000);
    });

    it('Provera texta na strani - Jedanaesti deo', function () {
        staticLoanMarketTerms.checkTextEleven();
        browser.sleep(4000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});