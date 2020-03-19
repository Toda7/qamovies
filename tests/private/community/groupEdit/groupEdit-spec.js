var groupEdit = require('./groupEdit-po.js');

describe('Editovanje Grupe, name, description, avatar, public private', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Dashboard stranu', function () {
        groupEdit.landOnHomePage();
        browser.sleep(2000);
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Cekiranje orginalnog imena Grupe', function () {
        groupEdit.checkOriginalGroupName();
        browser.sleep(2000);
    });

    it('Cekiranje orginalnog descritiona', function () {
        groupEdit.checkOriginalDescription();
        browser.sleep(2000);
    });

    it('Cekiranje da li je grupa Private', function () {
        groupEdit.checkGroupToBePrivate();
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

    it('Upload nove slike', function () {
        groupEdit.changeGroupPhoto();
        browser.sleep(2000);
    });

    it('Click na Group name polje', function () {
        groupEdit.clickOnGroupNameField();
        browser.sleep(2000);
    });

    it('Brisanje imena grupe', function () {
        groupEdit.deleteGroupName();
        browser.sleep(2000);
    });

    it('Unos novog imena grupe', function () {
        groupEdit.enterGroupName();
        browser.sleep(2000);
    });

    it('Klik na description polje', function () {
        groupEdit.clickOnGroupDescriptionField();
        browser.sleep(2000);
    });

    it('Unos texta u description polje', function () {
        groupEdit.editDescriptionText();
        browser.sleep(2000);
    });

    it('Promeni Grupu u public', function () {
        groupEdit.clickOnMakeGroupSwitch();
        browser.sleep(2000);
    });

    it('Klik na Update group', function () {
        groupEdit.clickOnUpdateGroup();
        browser.sleep(2000);
    });

    it('Cekiranje snackbar poruke', function () {
        groupEdit.checkSnackbar();
        browser.sleep(1000);
    });

    it('Klik na Cancel', function () {
        groupEdit.clickOnCancel();
        browser.sleep(2000);
    });

    it('Cekiranje editovanog descritiona', function () {
        groupEdit.checkEditedDescription();
        browser.sleep(2000);
    });

    it('Cekiranje editovanog imena Grupe', function () {
        groupEdit.checkEditedGroupName();
        browser.sleep(2000);
    });

    it('Cekiranje da li je grupa Public', function () {
        groupEdit.checkEditedGroupName();
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

    it('Vracanje orginalne slike', function () {
        groupEdit.changeGroupPhoto2();
        browser.sleep(2000);
    });

    it('Click na Group name polje', function () {
        groupEdit.clickOnGroupNameField();
        browser.sleep(2000);
    });

    it('Brisanje imena grupe', function () {
        groupEdit.deleteGroupName();
        browser.sleep(2000);
    });

    it('Unos orginalnog imena grupe', function () {
        groupEdit.enterGroupNameOriginal();
        browser.sleep(1000);
    });

    it('Klik na description polje', function () {
        groupEdit.clickOnGroupDescriptionField();
        browser.sleep(2000);
    });

    it('Klik na description polje', function () {
        groupEdit.clickOnGroupDescriptionField();
        browser.sleep(2000);
    });

    it('Delete description text', function () {
        groupEdit.deleteDescriptionText();
        browser.sleep(2000);
    });

    it('Unos orginalnog description texta', function () {
        groupEdit.enterOriginalDescriptionText();
        browser.sleep(2000);
    });

    it('Vracanje grupe u PRIVATE', function () {
        groupEdit.clickOnMakeGroupSwitch();
        browser.sleep(2000);
    });

    it('Klik na Update group', function () {
        groupEdit.clickOnUpdateGroup();
        browser.sleep(2000);
    });

    it('Cekiranje snackbar poruke', function () {
        groupEdit.checkSnackbar();
        browser.sleep(2000);
    });

    it('Klik na Cancel', function () {
        groupEdit.clickOnCancel();
        browser.sleep(2000);
    });

    it('Cekiranje orginalnog descritiona', function () {
        groupEdit.checkOriginalDescription();
        browser.sleep(2000);
    });

    it('Cekiranje da li je grupa Private', function () {
        groupEdit.checkGroupToBePrivate();
        browser.sleep(2000);
    });

    it('Cekiranje orginalnog imena Grupe', function () {
        groupEdit.checkOriginalGroupName();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});