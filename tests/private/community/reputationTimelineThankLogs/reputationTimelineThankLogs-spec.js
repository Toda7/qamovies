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

    it('Dolazak na Home stranu', function () {
        reputationTimelineThankLogs.landOnHomePage();
    });

    it('Klik na user menu', function(){
        reputationTimelineThankLogs.clickOnUserMenu();
    });

    it('Klik na Sign out', function(){
        reputationTimelineThankLogs.clickOnSignOut();
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
    });

    it('Dolazak na Home stranu', function () {
        reputationTimelineThankLogs.startDiscusionPage();
        browser.sleep(2000);
    });

    it('Unos discusion titla', function () {
        reputationTimelineThankLogs.discussionTitle();
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
        browser.sleep(2000);
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
        browser.sleep(2000);
    });

    it('Klikni na Thank digme za diskusiju', function () {
        thankDiscussion.clickOnThank();
    });

    it('Klikni na Thank dugme za Reply', function () {
        thankReply.clickOnThank();
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
    });

    it('Chekiranje loga za Thanks na Reply', function () {
        reputationTimelineThankLogs.checkLogReply();
    });

    it('Chekiranje loga za Thanks na Discussion', function () {
        reputationTimelineThankLogs.checkLogDiscussion();
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
    });

    it('Chekiranje loga za Thanks na Document', function () {
        reputationTimelineThankLogs.checkLogDocument();
    });

    it('Chekiranje loga za Thanks na Comment', function () {
        reputationTimelineThankLogs.checkLogComment();
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