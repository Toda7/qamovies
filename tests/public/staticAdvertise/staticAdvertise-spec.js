var staticAdvertise = require('./staticAdvertise-po.js');

describe('Provera Advertise strane', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Advertise stranu', function () {
        staticAdvertise.landOnAdvertise();
        browser.sleep(4000);
    });

    it('Otvori Intercom', function(){
        staticAdvertise.openIntercom();
        browser.sleep(1000)
    });

    it('Zatvori Intercom', function(){
        staticAdvertise.closeIntercom();
        browser.sleep(1000)
    });

    it('Provera Page Title-a', function () {
        staticAdvertise.checkPageTitle();
        browser.sleep(4000);
    });

    it('Provera texta uz prvu sliku', function () {
        staticAdvertise.checkTextRowOne();
        browser.sleep(4000);
    });

    it('Provera slike u prvom redu', function () {
        staticAdvertise.checkPhotoRowOne();
        browser.sleep(4000);
    });

    it('Provera slike u drugom redu', function () {
        staticAdvertise.checkPhotoRowOne();
        browser.sleep(4000);
    });

    it('Provera texta uz drugu sliku', function () {
        staticAdvertise.checkTextRowTwo();
        browser.sleep(4000);
    });

    it('Provera texta uz trecu sliku', function () {
        staticAdvertise.checkTextRowThree();
        browser.sleep(4000);
    });

    it('Provera slike u trecem redu', function () {
        staticAdvertise.checkPhotoRowOne();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 1', function () {
        staticAdvertise.checkBlueInfoSection1();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 2', function () {
        staticAdvertise.checkBlueInfoSection2();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 3', function () {
        staticAdvertise.checkBlueInfoSection3();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 4', function () {
        staticAdvertise.checkBlueInfoSection4();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 5', function () {
        staticAdvertise.checkBlueInfoSection5();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 6', function () {
        staticAdvertise.checkBlueInfoSection6();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 7', function () {
        staticAdvertise.checkBlueInfoSection7();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 8', function () {
        staticAdvertise.checkBlueInfoSection8();
        browser.sleep(4000);
    });

    it('Provera Plavog Info Section-a 9', function () {
        staticAdvertise.checkBlueInfoSection9();
        browser.sleep(4000);
    });

    it('Provera podnaslova - Brendovi', function () {
        staticAdvertise.checkSubTitleBrands();
        browser.sleep(4000);
    });

    it('Provera Brand logoa', function () {
        staticAdvertise.checkBrandLogos();
        browser.sleep(4000);
    });

    it('Provera texta - Angela Lucas', function () {
        staticAdvertise.checkQuoteSection();
        browser.sleep(4000);
    });

    it('Provera Avatara - Angela Lucas', function () {
        staticAdvertise.checkAngelaAvatar();
        browser.sleep(4000);
    });

    it('Provera Angela signature-a', function () {
        staticAdvertise.checkAngelaSignature();
        browser.sleep(4000);
    });

    it('Provera bottom texta', function () {
        staticAdvertise.checkBottomText();
        browser.sleep(4000);
    });

    it('Klik na GET STARTED button', function () {
        staticAdvertise.clickOnButton();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao Get Started page URL', function () {
        staticAdvertise.checkGetStartedURL();
        browser.sleep(4000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});