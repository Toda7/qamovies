var groupEditMembersTabSearch = require('./groupEditMembersTabSearch-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');
var groupEditMembersTabLoadMore = require('../groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-po.js');

describe('Editovanje Grupe, name, description, avatar, public private', function () {

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

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});