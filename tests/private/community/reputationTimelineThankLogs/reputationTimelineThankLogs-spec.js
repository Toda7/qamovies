var reputationTimelineThankLogs = require('./reputationTimelineThankLogs-po.js');
var commentDiscussion = require('../commentDiscussion/commentDiscussion-po.js');
var deleteDiscussion = require('../deleteDiscussion/deleteDiscussion-po.js');
var thankDiscussion = require('../thankDiscussion/thankDiscussion-po.js');
var thankReply = require('../thankReply/thankReply-po.js');
var thankDoc = require('../thankDoc/thankDoc-po.js');

describe('Reputation Timeline cekiranje Thanks logova', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

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

    it('Klik na Sign in', function () {
        reputationTimelineThankLogs.clickOnSignIn();
        browser.sleep(4000);
    });

    it('Unos emaila', function () {
        reputationTimelineThankLogs.enterEmail();
    });

    it('Unos passworda', function () {
        reputationTimelineThankLogs.enterPass();
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(3000)
    });

    it('Dolazak na Start discussion stranu', function () {
        reputationTimelineThankLogs.startDiscusionPage();
        browser.sleep(2000);
    });

    it('Unos discusion titla', function () {
        reputationTimelineThankLogs.discussionTitle();
        browser.sleep(1000);
    });

    it('Unos discusion descriptiona', function () {
        reputationTimelineThankLogs.discussionDesc();
    });

    it('Attach document', function () {
        reputationTimelineThankLogs.attachDoc();
    });

    it('Select topic', function () {
        reputationTimelineThankLogs.selectTopic();
    });

    it('Post discussion', function () {
        reputationTimelineThankLogs.postDiscussion();
        browser.sleep(2000);
    });

    it('Klik na View discussion', function () {
        reputationTimelineThankLogs.clickOnViewDiscussion();
        browser.sleep(3000);
    });

    it('Klik na Reply dugme', function () {
        reputationTimelineThankLogs.clickReply();
    });

    it('Reply tekst', function () {
        reputationTimelineThankLogs.replyText();
    });

    it('Klik na Post Reply dugme', function () {
        reputationTimelineThankLogs.postReply();
    });

    it('Klik na Comment dugme', function () {
        commentDiscussion.clickComment();
    });

    it('Comment Text', function () {
        reputationTimelineThankLogs.commentText();
    });

    it('klik na Comment dugme', function () {
        commentDiscussion.postComment();
        browser.sleep(1000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(2000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
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

    it('Dolazak na FI Professionals', function () {
        reputationTimelineThankLogs.landOnFIProfessionalsHome();
        browser.sleep(2000);
    });

    it('Klik na search polje', function () {
        reputationTimelineThankLogs.clickSearch();
        browser.sleep(2000);
    });

    it('Unosenje search term', function () {
        reputationTimelineThankLogs.enterSearchWord();
        browser.sleep(2000);
    });

    it('Klik na prvi rezultat', function () {
        reputationTimelineThankLogs.clickFirstResult();
        browser.sleep(2500);
    });

    it('Klikni na Thank dugme za diskusiju', function () {
        thankDiscussion.clickOnThank();
        browser.sleep(3000);
    });

    it('Klikni na Thank dugme za Reply', function () {

        // ne pozivamo vise iz drugog fajla
        reputationTimelineThankLogs.clickOnThank();
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

    it('Unos emaila', function () {
        reputationTimelineThankLogs.enterEmail();
    });

    it('Unos passworda', function () {
        reputationTimelineThankLogs.enterPass();
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(2000);
    });

    it('Dolazak na Reputation page', function () {
        reputationTimelineThankLogs.landOnReputationPage();
        browser.sleep(1000);
    });

    it('Chekiranje loga za Thanks na Reply', function () {
        reputationTimelineThankLogs.checkLogReply();
        browser.sleep(1000);
    });

    it('Chekiranje loga za Thanks na Discussion', function () {
        reputationTimelineThankLogs.checkLogDiscussion();
        browser.sleep(1000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(2000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
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
        browser.sleep(3000);
    });

    it('Klik na search polje', function () {
        reputationTimelineThankLogs.clickSearch();
        browser.sleep(2000);
    });

    it('Unosenje search term', function () {
        reputationTimelineThankLogs.enterSearchWord();
        browser.sleep(2000);
    });

    it('Klik na prvi rezultat', function () {
        reputationTimelineThankLogs.clickFirstResult();
        browser.sleep(2000);
    });

    it('Klikni na Thank dugme za Comment', function () {
        reputationTimelineThankLogs.clickOnThank();
        browser.sleep(2000);
    });


    it('Klikni na Document', function () {
        reputationTimelineThankLogs.clickOnViewDocument();
        browser.sleep(2000);
    });

    it('Klikni na Thank dugme za Doc', function () {
        thankDoc.thankDoc();
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

    it('Unos emaila', function () {
        reputationTimelineThankLogs.enterEmail();
    });

    it('Unos passworda', function () {
        reputationTimelineThankLogs.enterPass();
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(2000);
    });

    it('Dolazak na Reputation page', function () {
        reputationTimelineThankLogs.landOnReputationPage();
        browser.sleep(2000);
    });

    it('Chekiranje loga za Thanks na Document', function () {
        reputationTimelineThankLogs.checkLogDocument();
        browser.sleep(1000);
    });

    it('Chekiranje loga za Thanks na Comment', function () {
        reputationTimelineThankLogs.checkLogComment();
        browser.sleep(1000);
    });

    it('Klik na search polje', function () {
        reputationTimelineThankLogs.clickSearch();
        browser.sleep(2000);
    });

    it('Unosenje search term', function () {
        reputationTimelineThankLogs.enterSearchWord();
        browser.sleep(2000);
    });

    it('Klik na prvi rezultat', function () {
        reputationTimelineThankLogs.clickFirstResult();
        browser.sleep(2000);
    });

    it('Klik na Action menu', function () {
        deleteDiscussion.clickAction();
    });

    it('Klik na Delete dugme', function () {
        deleteDiscussion.clickDelete();
        browser.sleep(1000);
    });

    it('Provera da li obrisana diskusija', function () {
        deleteDiscussion.checkSuccess();
    });

    it('Dolazak na Reputation page', function () {
        reputationTimelineThankLogs.landOnReputationPage();
    });

    it('Klik na log od obrisane diskusije', function () {
        reputationTimelineThankLogs.clickOnLog();
        browser.sleep(3000);
    });

    it('Check poruke da je diskusija obrisana', function () {
        reputationTimelineThankLogs.checkMessage();
        browser.sleep(3000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(2000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
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
        browser.sleep(1000);
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});