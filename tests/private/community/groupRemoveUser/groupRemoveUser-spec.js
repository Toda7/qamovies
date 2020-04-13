var groupRemoveUser = require('./groupRemoveUser-po.js');
var groupEditMembersTabLoadMore = require('../groupEditMembersTabLoadMore/groupEditMembersTabLoadMore-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');
var groupEditMembersTabSearch = require('../groupEditMembersTabSearch/groupEditMembersTabSearch-po.js');
var reputationTimelineThankLogs = require('../reputationTimelineThankLogs/reputationTimelineThankLogs-po.js');


describe('Izbacivanje Usera iz Grupe, vracanje istog kao Admin', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2500);
    });

    it('Cekiranje broja usera u grupi (49)', function () {
        groupRemoveUser.checkGroupMembersCount();
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

    it('Unos imena usera', function () {
        groupRemoveUser.enterUsersName();
        browser.sleep(2000);
    });

    it('Cekiranje dobijenog Usera u Searchu', function () {
        groupRemoveUser.checkSearchedUser();
        browser.sleep(2000);
    });

    it('Klik na Remove icon', function () {
        groupRemoveUser.clickOnRemoveIcon();
        browser.sleep(2000);
    });

    it('Potvrdi izbacivanje Usera', function () {
        groupRemoveUser.confirmRemoveUser();
        browser.sleep(2000);
    });

    it('Cekiranje Snackbara da li je user Izbacen', function () {
        groupRemoveUser.checkSnackbarRemoveUser();
        browser.sleep(2000);
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Cekiranje da li se smanjio broja usera u grupi (48)', function () {
        groupRemoveUser.checkGroupMembersCountRemoved();
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

    it('Unos imena usera', function () {
        groupRemoveUser.enterUsersName();
        browser.sleep(3000);
    });

    it('Cekiranje da li ima rezultata', function () {
        groupRemoveUser.checkSearchResoult();
        browser.sleep(2000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(2000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(3000);
    });

    it('Unos Admin emaila', function () {
        groupRemoveUser.enterEmail();
    });

    it('Unos Admin passworda', function () {
        groupRemoveUser.enterPass();
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(2000);
    });

    it('Dolazak u Admin', function () {
        groupRemoveUser.landOnAdminPeople();
        browser.sleep(2000);
    });

    it('Klik na Search polje', function () {
        groupRemoveUser.clickOnSearchField();
        browser.sleep(2000);
    });

    it('Unos imena usera', function () {
        groupRemoveUser.findUser();
        browser.sleep(2000);
    });

    it('Klik na View Person', function () {
        groupRemoveUser.clickOnViewPerson();
        browser.sleep(4000);
    });

    it('Klik na Groups tab', function () {
        groupRemoveUser.clickTabGroups();
        browser.sleep(2000);
    });

    it('Vracanje usera uAFT grupu', function () {
        groupRemoveUser.clickOnJoinToGroup();
        browser.sleep(2000);
    });

    // it('Provera success poruke', function () {
    //     groupRemoveUser.checkMessageSuccess();
    //     browser.sleep(2000);
    // });

    it('Dolazak na Dashboard stranu', function () {
        reputationTimelineThankLogs.landOnHomePage();
        browser.sleep(2000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu();
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut();
        browser.sleep(2000);
    });

    it('Sign in', function(){
        groupRemoveUser.clickOnSignIn();
        browser.sleep(3000);
    });

    it('Unos emaila', function () {
        reputationTimelineThankLogs.enterEmail2();
    });

    it('Unos passworda', function () {
        reputationTimelineThankLogs.enterPass2();
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(2000);
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Cekiranje broja usera u grupi (49)', function () {
        groupRemoveUser.checkGroupMembersCount();
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

    it('Unos imena usera', function () {
        groupRemoveUser.enterUsersName();
        browser.sleep(2000);
    });

    it('Cekiranje dobijenog Usera u Searchu', function () {
        groupRemoveUser.checkSearchedUser();
        browser.sleep(2000);
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
    