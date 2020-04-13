var groupEditMembersTabLoadMore = require('../groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');
var groupMemberCardDetails = require('./groupMemberCardDetails-po.js');

describe('Cekiranje contenta i linkova u kartici za prvog usera sa liste', function () {

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

    it('Chekiranje Kartice za prvog usera sa liste', function () {
        groupMemberCardDetails.checkUserName();
        browser.sleep(2000);
    });

    it('Klik na User name', function () {
        groupMemberCardDetails.clickOnUserName();
        browser.sleep(1000);
    });

    it('Chekiranje URL User profile strane', function () {
        groupMemberCardDetails.checkUserProfileURL();
        browser.sleep(1000);
        browser.navigate().back();
    });

    it('Click na Members tab', function () {
        groupEditMembersTabLoadMore.clickOnMembersTab();
        browser.sleep(2000);
    });

    it('Klik na ime Banke', function () {
        groupMemberCardDetails.clickOnUserBank();
        browser.sleep(1000);
    });

    it('Chekiranje URL Banke', function () {
        groupMemberCardDetails.checkUserBankURL();
        browser.sleep(1000);
        browser.navigate().back();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});