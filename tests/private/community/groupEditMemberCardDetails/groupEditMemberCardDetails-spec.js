
var groupEditMemberCardDetails = require('./groupEditMemberCardDetails-po.js');
var groupEditMembersTabSearch = require('../groupEditMembersTabSearch/groupEditMembersTabSearch-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');
var groupEditMembersTabLoadMore = require('../groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-po.js');

describe('Cekiranje user kartice na Group edit strani', function () {

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

    it('Click na Members tab', function () {
        groupEditMembersTabLoadMore.clickOnMembersTab();
        browser.sleep(2000);
    });

    it('Click na Search polje', function () {
        groupEditMembersTabSearch.clickOnSearchField();
        browser.sleep(2000);
    });

    it('Unos texta u search polje', function () {
        groupEditMembersTabSearch.enterSearchTerm();
        browser.sleep(2000);
    });

    it('Provera imena Usera', function () {
        groupEditMembersTabSearch.checkUserName();
        browser.sleep(1000);
    });

    it('Provera Userovu banku', function () {
        groupEditMembersTabSearch.checkUsersBank();
        browser.sleep(1000);
    });

    it('Provera Job title i  Member since sekciju', function () {
        groupEditMembersTabSearch.checkMemberSince();
        browser.sleep(1000);
    });

    it('Klik na User name', function () {
        groupEditMemberCardDetails.clickOnUserName();
        browser.sleep(1000);
    });

    it('Chekiranje URL User profile strane', function () {
        groupEditMemberCardDetails.checkUserProfileURL();
        browser.sleep(1000);
        browser.navigate().back();
    });

    it('Click na Members tab', function () {
        groupEditMembersTabLoadMore.clickOnMembersTab();
        browser.sleep(2000);
    });

    it('Click na Search polje', function () {
        groupEditMembersTabSearch.clickOnSearchField();
        browser.sleep(2000);
    });

    it('Unos texta u search polje', function () {
        groupEditMembersTabSearch.enterSearchTerm();
        browser.sleep(2000);
    });

    it('Klik na ime Banke', function () {
        groupEditMemberCardDetails.clickOnUserBank();
        browser.sleep(1000);
    });

    it('Chekiranje URL Banke', function () {
        groupEditMemberCardDetails.checkUserBankURL();
        browser.sleep(1000);
        browser.navigate().back();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});