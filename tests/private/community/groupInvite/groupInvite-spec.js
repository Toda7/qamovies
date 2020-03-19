var groupEditMembersTabLoadMore = require('../groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');
var groupInvite = require('./groupInvite-po.js');

describe('Invite sa Group Members strane', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Click na Members tab', function () {
        groupEditMembersTabLoadMore.clickOnMembersTab();
        browser.sleep(2000);
    });

    it('Click na Invite polje', function () {
        groupInvite.clickOnInviteField();
        browser.sleep(2000);
    });

    it('Unos random emaila', function () {
        groupInvite.randomEmail();
        browser.sleep(2000);
    });

    it('Klik na Invite dugme', function () {
        groupInvite.clickOnInviteButton();
        browser.sleep(1000);
    });

    it('Provera snackbara da li je Invite poslat', function () {
        groupInvite.checkSnackbarInvite();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});