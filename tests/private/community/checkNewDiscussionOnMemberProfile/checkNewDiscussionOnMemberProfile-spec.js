var checkNewDiscussionOnMemberProfile = require('./checkNewDiscussionOnMemberProfile-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var reputationTimelineThankLogs = require('../reputationTimelineThankLogs/reputationTimelineThankLogs-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var login = require('../../account/login/login-po.js');
var checkDiscussionOnMyProfile = require('../checkDiscussionOnMyProfile/checkDiscussionOnMyProfile-po.js');
var deleteDiscussion = require('../deleteDiscussion/deleteDiscussion-po.js');

describe('Provera da li se napravljena diskusija pojavila na Member strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function(){
        createDiscussion.landOnHome();
        browser.sleep(1000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(1000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(2000);
    });

    it('Unesi email adresu profile_check@phoenix.com', function () {
        checkNewDiscussionOnMemberProfile.enterEmail1();
        browser.sleep(1000);
    });

    it('Unesi password test1234', function () {
        checkNewDiscussionOnMemberProfile.enterPassword1();
        browser.sleep(2000);
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(8000);
    });

    it('Klik na Start Discussion dugme', function(){
        createDiscussion.clickOnStartDiscussion();
        browser.sleep(1500);
    });

    it('Unos texta za Discussion Title', function(){
        checkNewDiscussionOnMemberProfile.discussionTitle();
        browser.sleep(1000);
    });

    it('Unos texta za Discussion Desription', function(){
        checkNewDiscussionOnMemberProfile.discussionDesc();
        browser.sleep(1000);
    });

    it('Dodavanje topika', function(){
        checkNewDiscussionOnMemberProfile.selectTopic();
        browser.sleep(1000);
    });

    it('Klik na Post Discussion', function(){
        createDiscussion.postDiscussion();
        browser.sleep(1000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(1000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function(){
        login.enterEmail();
        browser.sleep(500);
    });

    it('Unosenje lozinke', function(){
        login.enterPass();
        browser.sleep(500);
    });

    it('Logovanje', function(){
        login.submit();
        browser.sleep(2000);
    });

    it('Dolazak na profilnu stranu membera', function(){
        checkNewDiscussionOnMemberProfile.landOnMemberProfilePage();
        browser.sleep(2000);
    });

    it('Klik na Novu diskusiju', function () {
        checkDiscussionOnMyProfile.clickOnNewDiscussion();
        browser.sleep(2000);
    });

    it('Proveri discussion title', function () {
        checkNewDiscussionOnMemberProfile.checkDiscussionDesc();
        browser.sleep(1000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(1000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(2000);
    });

    it('Unesi email adresu profile_check@phoenix.com', function () {
        checkNewDiscussionOnMemberProfile.enterEmail1();
        browser.sleep(1000);
    });

    it('Unesi password test1234', function () {
        checkNewDiscussionOnMemberProfile.enterPassword1();
        browser.sleep(1000);
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(2000);
    });

    it('Dolazak na My Profile stranu', function () {
        checkNewDiscussionOnMemberProfile.landOnMyProfile();
        browser.sleep(2000);
    });

    it('Klik na Novu diskusiju', function () {
        checkDiscussionOnMyProfile.clickOnNewDiscussion();
        browser.sleep(2000);
    });

    it('Klik na Action menu', function(){
        deleteDiscussion.clickAction();
        browser.sleep(1000);
    });

    it('Klik na Delete dugme', function(){
        deleteDiscussion.clickDelete();
        browser.sleep(1000);
    });

    it('Provera da li obrisana diskusija', function(){
        deleteDiscussion.checkSuccess();
        browser.sleep(2000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(1000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function(){
        login.enterEmail();
        browser.sleep(500);
    });

    it('Unosenje lozinke', function(){
        login.enterPass();
        browser.sleep(500);
    });

    it('Logovanje', function(){
        login.submit();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
