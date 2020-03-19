var groupEditImageRemove = require('./groupEditImageRemove-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');


describe('Remove Group Avatar bez cuvanja izmena', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });
    
    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Click na MANAGE GROUP', function () {
        groupEdit.clickManageGroup();
        browser.sleep(2000);
    });

    it('Klik na Edit image', function () {
        groupEdit.clickOnEditImage();
        browser.sleep(2000);
    });

    it('Klik na Remove image', function () {
        groupEditImageRemove.clickRemoveImage();
        browser.sleep(2000);
    });

    it('Proverava da li se pojavilo Edit Image button', function () {
        groupEditImageRemove.checkEditImageButton();
        browser.sleep(2000);
    });

    it('Proverava da li se sklonila slika', function () {
        groupEditImageRemove.checkPhotoIsRemoved();
        browser.sleep(2000);
    });

    it('Klik na Cancel', function () {
        groupEdit.clickOnCancel();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});